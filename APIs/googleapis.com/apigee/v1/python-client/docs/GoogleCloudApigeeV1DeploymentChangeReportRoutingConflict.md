# GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict

Describes a routing conflict that may cause a deployment not to receive traffic at some base path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflicting_deployment** | [**GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment**](GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment.md) |  | [optional] 
**description** | **str** | Human-readable description of this conflict. | [optional] 
**environment_group** | **str** | Name of the environment group in which this conflict exists. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment_change_report_routing_conflict import GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict from a JSON string
google_cloud_apigee_v1_deployment_change_report_routing_conflict_instance = GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_change_report_routing_conflict_dict = google_cloud_apigee_v1_deployment_change_report_routing_conflict_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict from a dict
google_cloud_apigee_v1_deployment_change_report_routing_conflict_from_dict = GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict.from_dict(google_cloud_apigee_v1_deployment_change_report_routing_conflict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


