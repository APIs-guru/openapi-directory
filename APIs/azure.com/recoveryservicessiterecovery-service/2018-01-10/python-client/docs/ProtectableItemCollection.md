# ProtectableItemCollection

Protectable item collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[ProtectableItem]**](ProtectableItem.md) | The Protectable item details. | [optional] 

## Example

```python
from openapi_client.models.protectable_item_collection import ProtectableItemCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableItemCollection from a JSON string
protectable_item_collection_instance = ProtectableItemCollection.from_json(json)
# print the JSON string representation of the object
print(ProtectableItemCollection.to_json())

# convert the object into a dict
protectable_item_collection_dict = protectable_item_collection_instance.to_dict()
# create an instance of ProtectableItemCollection from a dict
protectable_item_collection_from_dict = ProtectableItemCollection.from_dict(protectable_item_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


