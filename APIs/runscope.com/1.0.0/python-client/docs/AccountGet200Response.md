# AccountGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Account**](Account.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_get200_response import AccountGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountGet200Response from a JSON string
account_get200_response_instance = AccountGet200Response.from_json(json)
# print the JSON string representation of the object
print(AccountGet200Response.to_json())

# convert the object into a dict
account_get200_response_dict = account_get200_response_instance.to_dict()
# create an instance of AccountGet200Response from a dict
account_get200_response_from_dict = AccountGet200Response.from_dict(account_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


