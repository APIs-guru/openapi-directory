# I18nConfig

If provided, i18n rewrites are enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**root** | **str** | Required. The user-supplied path where country and language specific content will be looked for within the public directory. | [optional] 

## Example

```python
from openapi_client.models.i18n_config import I18nConfig

# TODO update the JSON string below
json = "{}"
# create an instance of I18nConfig from a JSON string
i18n_config_instance = I18nConfig.from_json(json)
# print the JSON string representation of the object
print(I18nConfig.to_json())

# convert the object into a dict
i18n_config_dict = i18n_config_instance.to_dict()
# create an instance of I18nConfig from a dict
i18n_config_from_dict = I18nConfig.from_dict(i18n_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


