# ParticipantSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **float** | Time when the participant was added to the space | [optional] 
**first_name** | **str** | The first name of the participant | [optional] 
**last_name** | **str** | The last name of the participant | [optional] 
**modification_time** | **float** | Time when the participant was changed last. | [optional] 
**number_of_replies** | **float** | Number of replies in the space created by this participant. | [optional] 
**number_of_topics** | **float** | Number of topics in the space created by this participant. | [optional] 
**role** | **str** | The name of the role of the participant | [optional] 
**small_image_uri** | **str** | The uri of the small picture of the participant | [optional] 
**state** | **str** | The name of the state of the participant | [optional] 
**tenant_id** | **str** | the tenant id of the participant | [optional] 
**user_id** | **str** | The id of the participant | [optional] 

## Example

```python
from openapi_client.models.participant_search_result import ParticipantSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantSearchResult from a JSON string
participant_search_result_instance = ParticipantSearchResult.from_json(json)
# print the JSON string representation of the object
print(ParticipantSearchResult.to_json())

# convert the object into a dict
participant_search_result_dict = participant_search_result_instance.to_dict()
# create an instance of ParticipantSearchResult from a dict
participant_search_result_from_dict = ParticipantSearchResult.from_dict(participant_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


