# AndroidSdks

Android api level targeting data for app recovery action targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdk_levels** | **List[str]** | Android api levels of devices targeted by recovery action. See https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels for different api levels in android. | [optional] 

## Example

```python
from openapi_client.models.android_sdks import AndroidSdks

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidSdks from a JSON string
android_sdks_instance = AndroidSdks.from_json(json)
# print the JSON string representation of the object
print(AndroidSdks.to_json())

# convert the object into a dict
android_sdks_dict = android_sdks_instance.to_dict()
# create an instance of AndroidSdks from a dict
android_sdks_from_dict = AndroidSdks.from_dict(android_sdks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


