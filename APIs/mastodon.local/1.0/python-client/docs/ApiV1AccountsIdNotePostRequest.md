# ApiV1AccountsIdNotePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment to be set on that user. Provide an empty string or leave out this parameter to clear the currently set note. | [optional] 

## Example

```python
from openapi_client.models.api_v1_accounts_id_note_post_request import ApiV1AccountsIdNotePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsIdNotePostRequest from a JSON string
api_v1_accounts_id_note_post_request_instance = ApiV1AccountsIdNotePostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsIdNotePostRequest.to_json())

# convert the object into a dict
api_v1_accounts_id_note_post_request_dict = api_v1_accounts_id_note_post_request_instance.to_dict()
# create an instance of ApiV1AccountsIdNotePostRequest from a dict
api_v1_accounts_id_note_post_request_from_dict = ApiV1AccountsIdNotePostRequest.from_dict(api_v1_accounts_id_note_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


