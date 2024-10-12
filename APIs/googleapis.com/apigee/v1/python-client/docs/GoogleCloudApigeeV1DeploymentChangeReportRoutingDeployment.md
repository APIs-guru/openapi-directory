# GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment

Tuple representing a base path and the deployment containing it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_proxy** | **str** | Name of the deployed API proxy revision containing the base path. | [optional] 
**basepath** | **str** | Base path receiving traffic. | [optional] 
**environment** | **str** | Name of the environment in which the proxy is deployed. | [optional] 
**revision** | **str** | Name of the deployed API proxy revision containing the base path. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_deployment_change_report_routing_deployment import GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment from a JSON string
google_cloud_apigee_v1_deployment_change_report_routing_deployment_instance = GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_deployment_change_report_routing_deployment_dict = google_cloud_apigee_v1_deployment_change_report_routing_deployment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment from a dict
google_cloud_apigee_v1_deployment_change_report_routing_deployment_from_dict = GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment.from_dict(google_cloud_apigee_v1_deployment_change_report_routing_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


