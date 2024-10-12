# FormResponse

Response object for forms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Form**](Form.md) |  | [optional] 
**included** | [**List[Share]**](Share.md) |  | [optional] 
**response_status** | **int** | Http status code of the response.  | [optional] 

## Example

```python
from openapi_client.models.form_response import FormResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FormResponse from a JSON string
form_response_instance = FormResponse.from_json(json)
# print the JSON string representation of the object
print(FormResponse.to_json())

# convert the object into a dict
form_response_dict = form_response_instance.to_dict()
# create an instance of FormResponse from a dict
form_response_from_dict = FormResponse.from_dict(form_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


