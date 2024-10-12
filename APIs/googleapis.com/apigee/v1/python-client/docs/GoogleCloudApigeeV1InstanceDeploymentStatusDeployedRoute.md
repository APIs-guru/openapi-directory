# GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute

Route deployed in the ingress routing table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basepath** | **str** | Base path in the routing table. | [optional] 
**envgroup** | **str** | Environment group where this route is installed. | [optional] 
**environment** | **str** | Destination environment. This will be empty if the route is not yet reported. | [optional] 
**percentage** | **int** | Percentage of ingress replicas reporting this route. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_instance_deployment_status_deployed_route import GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute from a JSON string
google_cloud_apigee_v1_instance_deployment_status_deployed_route_instance = GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute.to_json())

# convert the object into a dict
google_cloud_apigee_v1_instance_deployment_status_deployed_route_dict = google_cloud_apigee_v1_instance_deployment_status_deployed_route_instance.to_dict()
# create an instance of GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute from a dict
google_cloud_apigee_v1_instance_deployment_status_deployed_route_from_dict = GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute.from_dict(google_cloud_apigee_v1_instance_deployment_status_deployed_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


