# UploadAccountResponse

Respone of uploading accounts in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**List[UploadAccountResponseErrorInner]**](UploadAccountResponseErrorInner.md) | The error encountered while processing the account info. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#UploadAccountResponse\&quot;. | [optional] [default to 'identitytoolkit#UploadAccountResponse']

## Example

```python
from openapi_client.models.upload_account_response import UploadAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadAccountResponse from a JSON string
upload_account_response_instance = UploadAccountResponse.from_json(json)
# print the JSON string representation of the object
print(UploadAccountResponse.to_json())

# convert the object into a dict
upload_account_response_dict = upload_account_response_instance.to_dict()
# create an instance of UploadAccountResponse from a dict
upload_account_response_from_dict = UploadAccountResponse.from_dict(upload_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


