# SetPassportDataErrorsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[PassportElementError]**](PassportElementError.md) | A JSON-serialized array describing the errors | 
**user_id** | **int** | User identifier | 

## Example

```python
from openapi_client.models.set_passport_data_errors_post_request import SetPassportDataErrorsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetPassportDataErrorsPostRequest from a JSON string
set_passport_data_errors_post_request_instance = SetPassportDataErrorsPostRequest.from_json(json)
# print the JSON string representation of the object
print(SetPassportDataErrorsPostRequest.to_json())

# convert the object into a dict
set_passport_data_errors_post_request_dict = set_passport_data_errors_post_request_instance.to_dict()
# create an instance of SetPassportDataErrorsPostRequest from a dict
set_passport_data_errors_post_request_from_dict = SetPassportDataErrorsPostRequest.from_dict(set_passport_data_errors_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


