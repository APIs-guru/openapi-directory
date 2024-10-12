# RoutingKeyInfo

Routing keys contain the following fields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** |  | [optional] 
**routing_key** | **str** |  | [optional] 
**targets** | [**List[RoutingKeyTarget]**](RoutingKeyTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.routing_key_info import RoutingKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingKeyInfo from a JSON string
routing_key_info_instance = RoutingKeyInfo.from_json(json)
# print the JSON string representation of the object
print(RoutingKeyInfo.to_json())

# convert the object into a dict
routing_key_info_dict = routing_key_info_instance.to_dict()
# create an instance of RoutingKeyInfo from a dict
routing_key_info_from_dict = RoutingKeyInfo.from_dict(routing_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


