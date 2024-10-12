# ParticipantsSearchResultLarge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** | are more results available, then start another search with finer query | [optional] 
**participants** | [**List[ParticipantSearchResultLarge]**](ParticipantSearchResultLarge.md) | list of participants | [optional] 
**search_pointer** | **str** | pointer for stored search  | [optional] 

## Example

```python
from openapi_client.models.participants_search_result_large import ParticipantsSearchResultLarge

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantsSearchResultLarge from a JSON string
participants_search_result_large_instance = ParticipantsSearchResultLarge.from_json(json)
# print the JSON string representation of the object
print(ParticipantsSearchResultLarge.to_json())

# convert the object into a dict
participants_search_result_large_dict = participants_search_result_large_instance.to_dict()
# create an instance of ParticipantsSearchResultLarge from a dict
participants_search_result_large_from_dict = ParticipantsSearchResultLarge.from_dict(participants_search_result_large_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


