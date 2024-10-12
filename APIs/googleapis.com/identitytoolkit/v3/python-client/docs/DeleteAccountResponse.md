# DeleteAccountResponse

Respone of deleting account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The fixed string \&quot;identitytoolkit#DeleteAccountResponse\&quot;. | [optional] [default to 'identitytoolkit#DeleteAccountResponse']

## Example

```python
from openapi_client.models.delete_account_response import DeleteAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteAccountResponse from a JSON string
delete_account_response_instance = DeleteAccountResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteAccountResponse.to_json())

# convert the object into a dict
delete_account_response_dict = delete_account_response_instance.to_dict()
# create an instance of DeleteAccountResponse from a dict
delete_account_response_from_dict = DeleteAccountResponse.from_dict(delete_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


