# BusinessCurrentAccountsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BusinessCurrentAccount]**](BusinessCurrentAccount.md) |  | 
**meta** | [**MetaData**](MetaData.md) |  | 

## Example

```python
from openapi_client.models.business_current_accounts_get200_response import BusinessCurrentAccountsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountsGet200Response from a JSON string
business_current_accounts_get200_response_instance = BusinessCurrentAccountsGet200Response.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountsGet200Response.to_json())

# convert the object into a dict
business_current_accounts_get200_response_dict = business_current_accounts_get200_response_instance.to_dict()
# create an instance of BusinessCurrentAccountsGet200Response from a dict
business_current_accounts_get200_response_from_dict = BusinessCurrentAccountsGet200Response.from_dict(business_current_accounts_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


