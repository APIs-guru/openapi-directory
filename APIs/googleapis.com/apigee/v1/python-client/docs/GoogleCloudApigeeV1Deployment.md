# GoogleCloudApigeeV1Deployment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_proxy** | **str** | API proxy. | [optional] 
**deploy_start_time** | **str** | Time the API proxy was marked &#x60;deployed&#x60; in the control plane in millisconds since epoch. | [optional] 
**environment** | **str** | Environment. | [optional] 
**errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Errors reported for this deployment. Populated only when state &#x3D;&#x3D; ERROR. **Note**: This field is displayed only when viewing deployment status. | [optional] 
**instances** | [**List[GoogleCloudApigeeV1InstanceDeploymentStatus]**](GoogleCloudApigeeV1InstanceDeploymentStatus.md) | Status reported by each runtime instance. **Note**: This field is displayed only when viewing deployment status. | [optional] 
**pods** | [**List[GoogleCloudApigeeV1PodStatus]**](GoogleCloudApigeeV1PodStatus.md) | Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3 and above report instance level status rather than pod status. | [optional] 
**proxy_deployment_type** | **str** | Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment supports flowhooks and flow hook is configured. | [optional] [readonly] 
**revision** | **str** | API proxy revision. | [optional] 
**route_conflicts** | [**List[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]**](GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict.md) | Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be &#x60;ERROR&#x60;, but it will mean that some of the deployment&#39;s base paths are not routed to its environment. If the conflicts change, the state will transition to &#x60;PROGRESSING&#x60; until the latest configuration is rolled out to all instances. **Note**: This field is displayed only when viewing deployment status. | [optional] 
**service_account** | **str** | The full resource name of Cloud IAM Service Account that this deployment is using, eg, &#x60;projects/-/serviceAccounts/{email}&#x60;. | [optional] 
**state** | **str** | Current state of the deployment. **Note**: This field is displayed only when viewing deployment status. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment import GoogleCloudApigeeV1Deployment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Deployment from a JSON string
google_cloud_apigee_v1_deployment_instance = GoogleCloudApigeeV1Deployment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Deployment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_dict = google_cloud_apigee_v1_deployment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Deployment from a dict
google_cloud_apigee_v1_deployment_from_dict = GoogleCloudApigeeV1Deployment.from_dict(google_cloud_apigee_v1_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


