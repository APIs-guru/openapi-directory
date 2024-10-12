# DirectAccessVersionInfo

Denotes whether Direct Access is supported, and by which client versions. DirectAccessService is currently available as a preview to select developers. You can register today on behalf of you and your team at https://developer.android.com/studio/preview/android-device-streaming

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_access_supported** | **bool** | Whether direct access is supported at all. Clients are expected to filter down the device list to only android models and versions which support Direct Access when that is the user intent. | [optional] 
**minimum_android_studio_version** | **str** | Output only. Indicates client-device compatibility, where a device is known to work only with certain workarounds implemented in the Android Studio client. Expected format \&quot;major.minor.micro.patch\&quot;, e.g. \&quot;5921.22.2211.8881706\&quot;. | [optional] 

## Example

```python
from openapi_client.models.direct_access_version_info import DirectAccessVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DirectAccessVersionInfo from a JSON string
direct_access_version_info_instance = DirectAccessVersionInfo.from_json(json)
# print the JSON string representation of the object
print(DirectAccessVersionInfo.to_json())

# convert the object into a dict
direct_access_version_info_dict = direct_access_version_info_instance.to_dict()
# create an instance of DirectAccessVersionInfo from a dict
direct_access_version_info_from_dict = DirectAccessVersionInfo.from_dict(direct_access_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


