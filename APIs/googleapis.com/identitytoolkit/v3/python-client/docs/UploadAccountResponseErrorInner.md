# UploadAccountResponseErrorInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The index of the malformed account, starting from 0. | [optional] 
**message** | **str** | Detailed error message for the account info. | [optional] 

## Example

```python
from openapi_client.models.upload_account_response_error_inner import UploadAccountResponseErrorInner

# TODO update the JSON string below
json = "{}"
# create an instance of UploadAccountResponseErrorInner from a JSON string
upload_account_response_error_inner_instance = UploadAccountResponseErrorInner.from_json(json)
# print the JSON string representation of the object
print(UploadAccountResponseErrorInner.to_json())

# convert the object into a dict
upload_account_response_error_inner_dict = upload_account_response_error_inner_instance.to_dict()
# create an instance of UploadAccountResponseErrorInner from a dict
upload_account_response_error_inner_from_dict = UploadAccountResponseErrorInner.from_dict(upload_account_response_error_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


