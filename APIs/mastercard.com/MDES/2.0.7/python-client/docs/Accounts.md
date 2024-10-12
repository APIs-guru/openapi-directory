# Accounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**List[Account]**](Account.md) | When searching by Account PAN or by Payment App Instance Id, the search response may contain more than one token. Each individual token can be updated during its lifetime and associated to a different Account PAN, or given a new Expiration Date. Different tokens within a single search response may therefore have different Account PANs and/or Expiration Dates. Account objects are used to group tokens that have exactly the same Account PAN and Account PAN Expiration Date. | [optional] 

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


