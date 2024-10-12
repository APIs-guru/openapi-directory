# PhpSettings

Settings for Php client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.php_settings import PhpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PhpSettings from a JSON string
php_settings_instance = PhpSettings.from_json(json)
# print the JSON string representation of the object
print(PhpSettings.to_json())

# convert the object into a dict
php_settings_dict = php_settings_instance.to_dict()
# create an instance of PhpSettings from a dict
php_settings_from_dict = PhpSettings.from_dict(php_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


