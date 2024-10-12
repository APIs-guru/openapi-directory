# IosAppExtensionInfo

App extension information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | App extension name | 
**target_bundle_identifier** | **str** | App extension bundle identifier | 

## Example

```python
from openapi_client.models.ios_app_extension_info import IosAppExtensionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IosAppExtensionInfo from a JSON string
ios_app_extension_info_instance = IosAppExtensionInfo.from_json(json)
# print the JSON string representation of the object
print(IosAppExtensionInfo.to_json())

# convert the object into a dict
ios_app_extension_info_dict = ios_app_extension_info_instance.to_dict()
# create an instance of IosAppExtensionInfo from a dict
ios_app_extension_info_from_dict = IosAppExtensionInfo.from_dict(ios_app_extension_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


