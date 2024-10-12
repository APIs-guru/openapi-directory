# AccountSettings

A ShipEngine account settings response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_label_layout** | [**DefaultLabelLayout**](DefaultLabelLayout.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_settings import AccountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSettings from a JSON string
account_settings_instance = AccountSettings.from_json(json)
# print the JSON string representation of the object
print(AccountSettings.to_json())

# convert the object into a dict
account_settings_dict = account_settings_instance.to_dict()
# create an instance of AccountSettings from a dict
account_settings_from_dict = AccountSettings.from_dict(account_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


