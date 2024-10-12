# GoogleCloudApigeeV1DeploymentChangeReportRoutingChange

Describes a potential routing change that may occur as a result of some deployment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Human-readable description of this routing change. | [optional] 
**environment_group** | **str** | Name of the environment group affected by this routing change. | [optional] 
**from_deployment** | [**GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment**](GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment.md) |  | [optional] 
**should_sequence_rollout** | **bool** | Set to &#x60;true&#x60; if using sequenced rollout would make this routing change safer. **Note**: This does not necessarily imply that automated sequenced rollout mode is supported for the operation. | [optional] 
**to_deployment** | [**GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment**](GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment_change_report_routing_change import GoogleCloudApigeeV1DeploymentChangeReportRoutingChange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeploymentChangeReportRoutingChange from a JSON string
google_cloud_apigee_v1_deployment_change_report_routing_change_instance = GoogleCloudApigeeV1DeploymentChangeReportRoutingChange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeploymentChangeReportRoutingChange.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_change_report_routing_change_dict = google_cloud_apigee_v1_deployment_change_report_routing_change_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeploymentChangeReportRoutingChange from a dict
google_cloud_apigee_v1_deployment_change_report_routing_change_from_dict = GoogleCloudApigeeV1DeploymentChangeReportRoutingChange.from_dict(google_cloud_apigee_v1_deployment_change_report_routing_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


