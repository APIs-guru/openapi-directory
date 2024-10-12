# AccountItemUpdates

Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_item_updates_settings** | [**AccountItemUpdatesSettings**](AccountItemUpdatesSettings.md) |  | [optional] 
**effective_allow_availability_updates** | **bool** | Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. | [optional] [readonly] 
**effective_allow_condition_updates** | **bool** | Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. | [optional] [readonly] 
**effective_allow_price_updates** | **bool** | Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. | [optional] [readonly] 
**effective_allow_strict_availability_updates** | **bool** | Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_item_updates import AccountItemUpdates

# TODO update the JSON string below
json = "{}"
# create an instance of AccountItemUpdates from a JSON string
account_item_updates_instance = AccountItemUpdates.from_json(json)
# print the JSON string representation of the object
print(AccountItemUpdates.to_json())

# convert the object into a dict
account_item_updates_dict = account_item_updates_instance.to_dict()
# create an instance of AccountItemUpdates from a dict
account_item_updates_from_dict = AccountItemUpdates.from_dict(account_item_updates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


