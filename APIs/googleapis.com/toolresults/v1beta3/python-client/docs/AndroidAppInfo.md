# AndroidAppInfo

Android app information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the app. Optional | [optional] 
**package_name** | **str** | The package name of the app. Required. | [optional] 
**version_code** | **str** | The internal version code of the app. Optional. | [optional] 
**version_name** | **str** | The version name of the app. Optional. | [optional] 

## Example

```python
from openapi_client.models.android_app_info import AndroidAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidAppInfo from a JSON string
android_app_info_instance = AndroidAppInfo.from_json(json)
# print the JSON string representation of the object
print(AndroidAppInfo.to_json())

# convert the object into a dict
android_app_info_dict = android_app_info_instance.to_dict()
# create an instance of AndroidAppInfo from a dict
android_app_info_from_dict = AndroidAppInfo.from_dict(android_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


