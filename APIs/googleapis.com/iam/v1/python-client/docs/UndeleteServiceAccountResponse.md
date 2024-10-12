# UndeleteServiceAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restored_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 

## Example

```python
from openapi_client.models.undelete_service_account_response import UndeleteServiceAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteServiceAccountResponse from a JSON string
undelete_service_account_response_instance = UndeleteServiceAccountResponse.from_json(json)
# print the JSON string representation of the object
print(UndeleteServiceAccountResponse.to_json())

# convert the object into a dict
undelete_service_account_response_dict = undelete_service_account_response_instance.to_dict()
# create an instance of UndeleteServiceAccountResponse from a dict
undelete_service_account_response_from_dict = UndeleteServiceAccountResponse.from_dict(undelete_service_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


