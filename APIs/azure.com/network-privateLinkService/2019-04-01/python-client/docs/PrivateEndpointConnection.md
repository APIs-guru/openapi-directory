# PrivateEndpointConnection

PrivateEndpointConnection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**PrivateEndpointConnectionProperties**](PrivateEndpointConnectionProperties.md) |  | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.private_endpoint_connection import PrivateEndpointConnection

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpointConnection from a JSON string
private_endpoint_connection_instance = PrivateEndpointConnection.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpointConnection.to_json())

# convert the object into a dict
private_endpoint_connection_dict = private_endpoint_connection_instance.to_dict()
# create an instance of PrivateEndpointConnection from a dict
private_endpoint_connection_from_dict = PrivateEndpointConnection.from_dict(private_endpoint_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


