# ParticipantsSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** | are more results available, than start another search | [optional] 
**participants** | [**List[ParticipantSearchResult]**](ParticipantSearchResult.md) | list of participants | [optional] 
**search_pointer** | **str** | pointer for stored search  | [optional] 

## Example

```python
from openapi_client.models.participants_search_result import ParticipantsSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantsSearchResult from a JSON string
participants_search_result_instance = ParticipantsSearchResult.from_json(json)
# print the JSON string representation of the object
print(ParticipantsSearchResult.to_json())

# convert the object into a dict
participants_search_result_dict = participants_search_result_instance.to_dict()
# create an instance of ParticipantsSearchResult from a dict
participants_search_result_from_dict = ParticipantsSearchResult.from_dict(participants_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


