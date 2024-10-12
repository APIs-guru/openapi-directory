# PrivateEndpointConnection

The Private Endpoint Connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PrivateEndpointConnectionProperties**](PrivateEndpointConnectionProperties.md) |  | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**location** | **str** | Specifies the location of the resource. | [optional] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

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


