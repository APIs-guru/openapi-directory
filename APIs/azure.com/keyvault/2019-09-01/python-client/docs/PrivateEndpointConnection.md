# PrivateEndpointConnection

Private endpoint connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PrivateEndpointConnectionProperties**](PrivateEndpointConnectionProperties.md) |  | [optional] 
**id** | **str** | Fully qualified identifier of the key vault resource. | [optional] [readonly] 
**location** | **str** | Azure location of the key vault resource. | [optional] [readonly] 
**name** | **str** | Name of the key vault resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags assigned to the key vault resource. | [optional] [readonly] 
**type** | **str** | Resource type of the key vault resource. | [optional] [readonly] 

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


