# AndroidAppConfig

Configuration metadata of a single Firebase App for Android.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_file_contents** | **bytearray** | The contents of the JSON configuration file. | [optional] 
**config_filename** | **str** | The filename that the configuration artifact for the &#x60;AndroidApp&#x60; is typically saved as. For example: &#x60;google-services.json&#x60; | [optional] 

## Example

```python
from openapi_client.models.android_app_config import AndroidAppConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidAppConfig from a JSON string
android_app_config_instance = AndroidAppConfig.from_json(json)
# print the JSON string representation of the object
print(AndroidAppConfig.to_json())

# convert the object into a dict
android_app_config_dict = android_app_config_instance.to_dict()
# create an instance of AndroidAppConfig from a dict
android_app_config_from_dict = AndroidAppConfig.from_dict(android_app_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


