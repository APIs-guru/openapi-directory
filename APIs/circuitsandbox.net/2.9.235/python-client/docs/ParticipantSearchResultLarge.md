# ParticipantSearchResultLarge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **float** | Time when the participant was added to the space | [optional] 
**department** | **str** | The department of the participant | [optional] 
**first_name** | **str** | The first name of the participant | [optional] 
**is_member** | **bool** | Is the participant a member of the space | [optional] 
**job_description** | **str** | The job description of the participant | [optional] 
**last_content_creation_time** | **float** | The last time the participant created content. | [optional] 
**last_name** | **str** | The last name of the participant | [optional] 
**modification_time** | **float** | Time when the participant was changed last. | [optional] 
**number_of_replies** | **float** | The number of replies | [optional] 
**number_of_topics** | **float** | The number of topics | [optional] 
**reason** | **str** | The reason of it all (42) | [optional] 
**role** | **str** | The name of the role of the participant | [optional] 
**small_image_uri** | **str** | The uri of the small picture of the participant | [optional] 
**space_id** | **str** | The id of the space | [optional] 
**state** | **str** | The name of the state  | [optional] 
**tenant_id** | **str** | the tenant id of the participant | [optional] 
**user_id** | **str** | The id of the participant | [optional] 

## Example

```python
from openapi_client.models.participant_search_result_large import ParticipantSearchResultLarge

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantSearchResultLarge from a JSON string
participant_search_result_large_instance = ParticipantSearchResultLarge.from_json(json)
# print the JSON string representation of the object
print(ParticipantSearchResultLarge.to_json())

# convert the object into a dict
participant_search_result_large_dict = participant_search_result_large_instance.to_dict()
# create an instance of ParticipantSearchResultLarge from a dict
participant_search_result_large_from_dict = ParticipantSearchResultLarge.from_dict(participant_search_result_large_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


