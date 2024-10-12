# SlotDifferenceCollection

Collection of slot differences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SlotDifference]**](SlotDifference.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.slot_difference_collection import SlotDifferenceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SlotDifferenceCollection from a JSON string
slot_difference_collection_instance = SlotDifferenceCollection.from_json(json)
# print the JSON string representation of the object
print(SlotDifferenceCollection.to_json())

# convert the object into a dict
slot_difference_collection_dict = slot_difference_collection_instance.to_dict()
# create an instance of SlotDifferenceCollection from a dict
slot_difference_collection_from_dict = SlotDifferenceCollection.from_dict(slot_difference_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


