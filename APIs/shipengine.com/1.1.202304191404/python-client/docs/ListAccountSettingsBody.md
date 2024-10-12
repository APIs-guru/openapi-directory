# ListAccountSettingsBody

An account settings list response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_label_layout** | [**DefaultLabelLayout**](DefaultLabelLayout.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_account_settings_body import ListAccountSettingsBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountSettingsBody from a JSON string
list_account_settings_body_instance = ListAccountSettingsBody.from_json(json)
# print the JSON string representation of the object
print(ListAccountSettingsBody.to_json())

# convert the object into a dict
list_account_settings_body_dict = list_account_settings_body_instance.to_dict()
# create an instance of ListAccountSettingsBody from a dict
list_account_settings_body_from_dict = ListAccountSettingsBody.from_dict(list_account_settings_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


