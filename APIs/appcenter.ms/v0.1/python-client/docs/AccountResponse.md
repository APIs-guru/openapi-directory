# AccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the account | 
**email** | **str** | The account&#39;s email. For org that value might be empty. | [optional] 
**id** | **str** | The internal unique id (UUID) of the account. | 
**name** | **str** | The slug name of the account | 
**origin** | **str** | The creation origin of this account | 
**type** | **str** | The type of this account | 

## Example

```python
from openapi_client.models.account_response import AccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountResponse from a JSON string
account_response_instance = AccountResponse.from_json(json)
# print the JSON string representation of the object
print(AccountResponse.to_json())

# convert the object into a dict
account_response_dict = account_response_instance.to_dict()
# create an instance of AccountResponse from a dict
account_response_from_dict = AccountResponse.from_dict(account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


