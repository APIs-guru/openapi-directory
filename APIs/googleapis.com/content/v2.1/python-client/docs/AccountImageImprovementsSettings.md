# AccountImageImprovementsSettings

Settings for the Automatic Image Improvements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_automatic_image_improvements** | **bool** | Enables automatic image improvements. | [optional] 

## Example

```python
from openapi_client.models.account_image_improvements_settings import AccountImageImprovementsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccountImageImprovementsSettings from a JSON string
account_image_improvements_settings_instance = AccountImageImprovementsSettings.from_json(json)
# print the JSON string representation of the object
print(AccountImageImprovementsSettings.to_json())

# convert the object into a dict
account_image_improvements_settings_dict = account_image_improvements_settings_instance.to_dict()
# create an instance of AccountImageImprovementsSettings from a dict
account_image_improvements_settings_from_dict = AccountImageImprovementsSettings.from_dict(account_image_improvements_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


