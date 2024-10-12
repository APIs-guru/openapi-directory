# AccountsLinkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#accountsLinkResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.accounts_link_response import AccountsLinkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AccountsLinkResponse from a JSON string
accounts_link_response_instance = AccountsLinkResponse.from_json(json)
# print the JSON string representation of the object
print(AccountsLinkResponse.to_json())

# convert the object into a dict
accounts_link_response_dict = accounts_link_response_instance.to_dict()
# create an instance of AccountsLinkResponse from a dict
accounts_link_response_from_dict = AccountsLinkResponse.from_dict(accounts_link_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


