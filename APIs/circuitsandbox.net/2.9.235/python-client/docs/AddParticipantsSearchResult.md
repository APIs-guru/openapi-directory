# AddParticipantsSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**department** | **str** | The department of the participant | [optional] 
**first_name** | **str** | The first name of the participant | [optional] 
**is_member** | **bool** | is the participant a member, true or false | [optional] 
**job_title** | **str** | The job title of the participant | [optional] 
**last_name** | **str** | The last name of the participant | [optional] 
**small_image_uri** | **str** | The uri of the small picture of the participant | [optional] 
**tenant_id** | **str** | the tenant id of the participant | [optional] 
**user_id** | **str** | The id of the participant | [optional] 

## Example

```python
from openapi_client.models.add_participants_search_result import AddParticipantsSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of AddParticipantsSearchResult from a JSON string
add_participants_search_result_instance = AddParticipantsSearchResult.from_json(json)
# print the JSON string representation of the object
print(AddParticipantsSearchResult.to_json())

# convert the object into a dict
add_participants_search_result_dict = add_participants_search_result_instance.to_dict()
# create an instance of AddParticipantsSearchResult from a dict
add_participants_search_result_from_dict = AddParticipantsSearchResult.from_dict(add_participants_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


