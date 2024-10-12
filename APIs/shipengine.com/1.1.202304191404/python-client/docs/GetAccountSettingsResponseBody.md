# GetAccountSettingsResponseBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_label_layout** | [**DefaultLabelLayout**](DefaultLabelLayout.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_account_settings_response_body import GetAccountSettingsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetAccountSettingsResponseBody from a JSON string
get_account_settings_response_body_instance = GetAccountSettingsResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetAccountSettingsResponseBody.to_json())

# convert the object into a dict
get_account_settings_response_body_dict = get_account_settings_response_body_instance.to_dict()
# create an instance of GetAccountSettingsResponseBody from a dict
get_account_settings_response_body_from_dict = GetAccountSettingsResponseBody.from_dict(get_account_settings_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


