# GetCreditNoteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreditNote**](CreditNote.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_credit_note_response import GetCreditNoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCreditNoteResponse from a JSON string
get_credit_note_response_instance = GetCreditNoteResponse.from_json(json)
# print the JSON string representation of the object
print(GetCreditNoteResponse.to_json())

# convert the object into a dict
get_credit_note_response_dict = get_credit_note_response_instance.to_dict()
# create an instance of GetCreditNoteResponse from a dict
get_credit_note_response_from_dict = GetCreditNoteResponse.from_dict(get_credit_note_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


