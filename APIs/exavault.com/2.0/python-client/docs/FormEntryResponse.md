# FormEntryResponse

Response object of the form data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[FormEntry]**](FormEntry.md) | Object submissions data for form. | [optional] 
**response_status** | **int** | Http status code of the response.  | [optional] 
**returned_results** | **int** | Number of returned results.  | [optional] 
**total_results** | **int** | Total results found.  | [optional] 

## Example

```python
from openapi_client.models.form_entry_response import FormEntryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FormEntryResponse from a JSON string
form_entry_response_instance = FormEntryResponse.from_json(json)
# print the JSON string representation of the object
print(FormEntryResponse.to_json())

# convert the object into a dict
form_entry_response_dict = form_entry_response_instance.to_dict()
# create an instance of FormEntryResponse from a dict
form_entry_response_from_dict = FormEntryResponse.from_dict(form_entry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


