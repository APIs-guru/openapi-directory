# GetNoteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Note**](Note.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_note_response import GetNoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetNoteResponse from a JSON string
get_note_response_instance = GetNoteResponse.from_json(json)
# print the JSON string representation of the object
print(GetNoteResponse.to_json())

# convert the object into a dict
get_note_response_dict = get_note_response_instance.to_dict()
# create an instance of GetNoteResponse from a dict
get_note_response_from_dict = GetNoteResponse.from_dict(get_note_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


