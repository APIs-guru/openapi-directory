# SocialNotesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**page_id** | **str** |  | [optional] 
**person_id** | **str** |  | [optional] 
**social_note_content** | **str** |  | [optional] 
**social_note_paragraph_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.social_notes_response import SocialNotesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SocialNotesResponse from a JSON string
social_notes_response_instance = SocialNotesResponse.from_json(json)
# print the JSON string representation of the object
print(SocialNotesResponse.to_json())

# convert the object into a dict
social_notes_response_dict = social_notes_response_instance.to_dict()
# create an instance of SocialNotesResponse from a dict
social_notes_response_from_dict = SocialNotesResponse.from_dict(social_notes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


