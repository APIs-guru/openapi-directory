# AccountAutomaticImprovements

The automatic improvements of the account can be used to automatically update items, improve images and shipping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_improvements** | [**AccountImageImprovements**](AccountImageImprovements.md) |  | [optional] 
**item_updates** | [**AccountItemUpdates**](AccountItemUpdates.md) |  | [optional] 
**shipping_improvements** | [**AccountShippingImprovements**](AccountShippingImprovements.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_automatic_improvements import AccountAutomaticImprovements

# TODO update the JSON string below
json = "{}"
# create an instance of AccountAutomaticImprovements from a JSON string
account_automatic_improvements_instance = AccountAutomaticImprovements.from_json(json)
# print the JSON string representation of the object
print(AccountAutomaticImprovements.to_json())

# convert the object into a dict
account_automatic_improvements_dict = account_automatic_improvements_instance.to_dict()
# create an instance of AccountAutomaticImprovements from a dict
account_automatic_improvements_from_dict = AccountAutomaticImprovements.from_dict(account_automatic_improvements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


