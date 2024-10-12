# MapsAccounts

A list of Maps Accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MapsAccount]**](MapsAccount.md) | a Maps Account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_accounts import MapsAccounts

# TODO update the JSON string below
json = "{}"
# create an instance of MapsAccounts from a JSON string
maps_accounts_instance = MapsAccounts.from_json(json)
# print the JSON string representation of the object
print(MapsAccounts.to_json())

# convert the object into a dict
maps_accounts_dict = maps_accounts_instance.to_dict()
# create an instance of MapsAccounts from a dict
maps_accounts_from_dict = MapsAccounts.from_dict(maps_accounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


