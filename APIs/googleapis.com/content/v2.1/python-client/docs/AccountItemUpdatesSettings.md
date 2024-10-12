# AccountItemUpdatesSettings

Settings for the Automatic Item Updates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_availability_updates** | **bool** | If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer&#39;s page. If additionally &#x60;allow_availability_updates&#x60; field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page. | [optional] 
**allow_condition_updates** | **bool** | If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product. | [optional] 
**allow_price_updates** | **bool** | If price updates are enabled, Google always updates the active price with the crawled information. | [optional] 
**allow_strict_availability_updates** | **bool** | If allow_availability_updates is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are &#39;out of stock&#39; on your website but &#39;in stock&#39; on Shopping. Set this to true to also update items that are &#39;in stock&#39; on your website, but &#39;out of stock&#39; on Google Shopping. In order for this field to have an effect, you must also allow availability updates. | [optional] 

## Example

```python
from openapi_client.models.account_item_updates_settings import AccountItemUpdatesSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccountItemUpdatesSettings from a JSON string
account_item_updates_settings_instance = AccountItemUpdatesSettings.from_json(json)
# print the JSON string representation of the object
print(AccountItemUpdatesSettings.to_json())

# convert the object into a dict
account_item_updates_settings_dict = account_item_updates_settings_instance.to_dict()
# create an instance of AccountItemUpdatesSettings from a dict
account_item_updates_settings_from_dict = AccountItemUpdatesSettings.from_dict(account_item_updates_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


