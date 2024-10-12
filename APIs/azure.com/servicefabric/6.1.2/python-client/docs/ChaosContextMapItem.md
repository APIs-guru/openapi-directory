# ChaosContextMapItem

Describes an item in the ChaosContextMap in ChaosParameters. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key for a ChaosContextMapItem. | 
**value** | **str** | The value for a ChaosContextMapItem. | 

## Example

```python
from openapi_client.models.chaos_context_map_item import ChaosContextMapItem

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosContextMapItem from a JSON string
chaos_context_map_item_instance = ChaosContextMapItem.from_json(json)
# print the JSON string representation of the object
print(ChaosContextMapItem.to_json())

# convert the object into a dict
chaos_context_map_item_dict = chaos_context_map_item_instance.to_dict()
# create an instance of ChaosContextMapItem from a dict
chaos_context_map_item_from_dict = ChaosContextMapItem.from_dict(chaos_context_map_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


