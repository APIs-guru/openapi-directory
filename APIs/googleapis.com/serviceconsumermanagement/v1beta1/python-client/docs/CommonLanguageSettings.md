# CommonLanguageSettings

Required information for every language.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | **List[str]** | The destination where API teams want this client library to be published. | [optional] 
**reference_docs_uri** | **str** | Link to automatically generated reference documentation. Example: https://cloud.google.com/nodejs/docs/reference/asset/latest | [optional] 

## Example

```python
from openapi_client.models.common_language_settings import CommonLanguageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CommonLanguageSettings from a JSON string
common_language_settings_instance = CommonLanguageSettings.from_json(json)
# print the JSON string representation of the object
print(CommonLanguageSettings.to_json())

# convert the object into a dict
common_language_settings_dict = common_language_settings_instance.to_dict()
# create an instance of CommonLanguageSettings from a dict
common_language_settings_from_dict = CommonLanguageSettings.from_dict(common_language_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


