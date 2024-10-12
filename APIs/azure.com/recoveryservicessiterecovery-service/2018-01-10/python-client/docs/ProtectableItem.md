# ProtectableItem

Replication protected item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectableItemProperties**](ProtectableItemProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.protectable_item import ProtectableItem

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableItem from a JSON string
protectable_item_instance = ProtectableItem.from_json(json)
# print the JSON string representation of the object
print(ProtectableItem.to_json())

# convert the object into a dict
protectable_item_dict = protectable_item_instance.to_dict()
# create an instance of ProtectableItem from a dict
protectable_item_from_dict = ProtectableItem.from_dict(protectable_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


