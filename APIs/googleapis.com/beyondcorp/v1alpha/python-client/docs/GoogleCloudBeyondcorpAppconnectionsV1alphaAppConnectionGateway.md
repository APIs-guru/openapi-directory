# GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway

Gateway represents a user facing component that serves as an entrance to enable connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_gateway** | **str** | Required. AppGateway name in following format: &#x60;projects/{project_id}/locations/{location_id}/appgateways/{gateway_id}&#x60; | [optional] 
**ingress_port** | **int** | Output only. Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443. | [optional] [readonly] 
**l7psc** | **str** | Output only. L7 private service connection for this resource. | [optional] [readonly] 
**type** | **str** | Required. The type of hosting used by the gateway. | [optional] 
**uri** | **str** | Output only. Server-defined URI for this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnections_v1alpha_app_connection_gateway import GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway from a JSON string
google_cloud_beyondcorp_appconnections_v1alpha_app_connection_gateway_instance = GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnections_v1alpha_app_connection_gateway_dict = google_cloud_beyondcorp_appconnections_v1alpha_app_connection_gateway_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway from a dict
google_cloud_beyondcorp_appconnections_v1alpha_app_connection_gateway_from_dict = GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway.from_dict(google_cloud_beyondcorp_appconnections_v1alpha_app_connection_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


