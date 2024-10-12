# FlaggedItemsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flagged_items** | [**List[FlaggedItem]**](FlaggedItem.md) | A list of flagged items | [optional] 
**has_more** | **bool** | More results available (true-use searchpointer for next search/false) | [optional] 
**search_pointer** | **str** | The searchpointer | [optional] 

## Example

```python
from openapi_client.models.flagged_items_result import FlaggedItemsResult

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedItemsResult from a JSON string
flagged_items_result_instance = FlaggedItemsResult.from_json(json)
# print the JSON string representation of the object
print(FlaggedItemsResult.to_json())

# convert the object into a dict
flagged_items_result_dict = flagged_items_result_instance.to_dict()
# create an instance of FlaggedItemsResult from a dict
flagged_items_result_from_dict = FlaggedItemsResult.from_dict(flagged_items_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


