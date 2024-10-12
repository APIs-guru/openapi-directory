# ListRoutingKeysResponse

Info about routing keys in the org

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**routing_keys** | [**List[RoutingKeyInfo]**](RoutingKeyInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_routing_keys_response import ListRoutingKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRoutingKeysResponse from a JSON string
list_routing_keys_response_instance = ListRoutingKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListRoutingKeysResponse.to_json())

# convert the object into a dict
list_routing_keys_response_dict = list_routing_keys_response_instance.to_dict()
# create an instance of ListRoutingKeysResponse from a dict
list_routing_keys_response_from_dict = ListRoutingKeysResponse.from_dict(list_routing_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


