# AndroidInfo

Android related attributes to the Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_fallback_link** | **str** | Link to open on Android if the app is not installed. | [optional] 
**android_link** | **str** | If specified, this overrides the ‘link’ parameter on Android. | [optional] 
**android_min_package_version_code** | **str** | Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store. | [optional] 
**android_package_name** | **str** | Android package name of the app. | [optional] 

## Example

```python
from openapi_client.models.android_info import AndroidInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidInfo from a JSON string
android_info_instance = AndroidInfo.from_json(json)
# print the JSON string representation of the object
print(AndroidInfo.to_json())

# convert the object into a dict
android_info_dict = android_info_instance.to_dict()
# create an instance of AndroidInfo from a dict
android_info_from_dict = AndroidInfo.from_dict(android_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


