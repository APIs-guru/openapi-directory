# GoogleCloudApigeeV1DeploymentChangeReport

Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routing_changes** | [**List[GoogleCloudApigeeV1DeploymentChangeReportRoutingChange]**](GoogleCloudApigeeV1DeploymentChangeReportRoutingChange.md) | All routing changes that may result from a deployment request. | [optional] 
**routing_conflicts** | [**List[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]**](GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict.md) | All base path conflicts detected for a deployment request. | [optional] 
**validation_errors** | [**GoogleRpcPreconditionFailure**](GoogleRpcPreconditionFailure.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment_change_report import GoogleCloudApigeeV1DeploymentChangeReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeploymentChangeReport from a JSON string
google_cloud_apigee_v1_deployment_change_report_instance = GoogleCloudApigeeV1DeploymentChangeReport.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeploymentChangeReport.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_change_report_dict = google_cloud_apigee_v1_deployment_change_report_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeploymentChangeReport from a dict
google_cloud_apigee_v1_deployment_change_report_from_dict = GoogleCloudApigeeV1DeploymentChangeReport.from_dict(google_cloud_apigee_v1_deployment_change_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


