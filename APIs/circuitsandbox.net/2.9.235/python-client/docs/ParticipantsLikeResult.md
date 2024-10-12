# ParticipantsLikeResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **bool** | More results available (true-use searchpointer for next search/false) | [optional] 
**participants** | [**List[ParticipantsLike]**](ParticipantsLike.md) | A list of participants who like the topic | [optional] 
**search_pointer** | **str** | The searchpointer | [optional] 

## Example

```python
from openapi_client.models.participants_like_result import ParticipantsLikeResult

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantsLikeResult from a JSON string
participants_like_result_instance = ParticipantsLikeResult.from_json(json)
# print the JSON string representation of the object
print(ParticipantsLikeResult.to_json())

# convert the object into a dict
participants_like_result_dict = participants_like_result_instance.to_dict()
# create an instance of ParticipantsLikeResult from a dict
participants_like_result_from_dict = ParticipantsLikeResult.from_dict(participants_like_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


