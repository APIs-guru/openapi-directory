# IosAppConfig

Configuration metadata of a single Firebase App for iOS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_file_contents** | **bytearray** | The content of the XML configuration file. | [optional] 
**config_filename** | **str** | The filename that the configuration artifact for the &#x60;IosApp&#x60; is typically saved as. For example: &#x60;GoogleService-Info.plist&#x60; | [optional] 

## Example

```python
from openapi_client.models.ios_app_config import IosAppConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IosAppConfig from a JSON string
ios_app_config_instance = IosAppConfig.from_json(json)
# print the JSON string representation of the object
print(IosAppConfig.to_json())

# convert the object into a dict
ios_app_config_dict = ios_app_config_instance.to_dict()
# create an instance of IosAppConfig from a dict
ios_app_config_from_dict = IosAppConfig.from_dict(ios_app_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


