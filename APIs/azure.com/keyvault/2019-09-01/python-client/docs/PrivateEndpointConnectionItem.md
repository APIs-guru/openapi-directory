# PrivateEndpointConnectionItem

Private endpoint connection item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PrivateEndpointConnectionProperties**](PrivateEndpointConnectionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_endpoint_connection_item import PrivateEndpointConnectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpointConnectionItem from a JSON string
private_endpoint_connection_item_instance = PrivateEndpointConnectionItem.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpointConnectionItem.to_json())

# convert the object into a dict
private_endpoint_connection_item_dict = private_endpoint_connection_item_instance.to_dict()
# create an instance of PrivateEndpointConnectionItem from a dict
private_endpoint_connection_item_from_dict = PrivateEndpointConnectionItem.from_dict(private_endpoint_connection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


