# Accounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[Account]**](Account.md) | The accounts returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#accounts. | [optional] [default to 'adsense#accounts']
**next_page_token** | **str** | Continuation token used to page through accounts. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.accounts import Accounts

# TODO update the JSON string below
json = "{}"
# create an instance of Accounts from a JSON string
accounts_instance = Accounts.from_json(json)
# print the JSON string representation of the object
print(Accounts.to_json())

# convert the object into a dict
accounts_dict = accounts_instance.to_dict()
# create an instance of Accounts from a dict
accounts_from_dict = Accounts.from_dict(accounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


