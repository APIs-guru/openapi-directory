# YumSettings

Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludes** | **List[str]** | List of packages to exclude from update. These packages are excluded by using the yum &#x60;--exclude&#x60; flag. | [optional] 
**exclusive_packages** | **List[str]** | An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields. | [optional] 
**minimal** | **bool** | Will cause patch to run &#x60;yum update-minimal&#x60; instead. | [optional] 
**security** | **bool** | Adds the &#x60;--security&#x60; flag to &#x60;yum update&#x60;. Not supported on all platforms. | [optional] 

## Example

```python
from openapi_client.models.yum_settings import YumSettings

# TODO update the JSON string below
json = "{}"
# create an instance of YumSettings from a JSON string
yum_settings_instance = YumSettings.from_json(json)
# print the JSON string representation of the object
print(YumSettings.to_json())

# convert the object into a dict
yum_settings_dict = yum_settings_instance.to_dict()
# create an instance of YumSettings from a dict
yum_settings_from_dict = YumSettings.from_dict(yum_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


