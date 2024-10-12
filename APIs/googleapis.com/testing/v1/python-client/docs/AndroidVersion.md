# AndroidVersion

A version of the Android OS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_level** | **int** | The API level for this Android version. Examples: 18, 19. | [optional] 
**code_name** | **str** | The code name for this Android version. Examples: \&quot;JellyBean\&quot;, \&quot;KitKat\&quot;. | [optional] 
**distribution** | [**Distribution**](Distribution.md) |  | [optional] 
**id** | **str** | An opaque id for this Android version. Use this id to invoke the TestExecutionService. | [optional] 
**release_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**tags** | **List[str]** | Tags for this dimension. Examples: \&quot;default\&quot;, \&quot;preview\&quot;, \&quot;deprecated\&quot;. | [optional] 
**version_string** | **str** | A string representing this version of the Android OS. Examples: \&quot;4.3\&quot;, \&quot;4.4\&quot;. | [optional] 

## Example

```python
from openapi_client.models.android_version import AndroidVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidVersion from a JSON string
android_version_instance = AndroidVersion.from_json(json)
# print the JSON string representation of the object
print(AndroidVersion.to_json())

# convert the object into a dict
android_version_dict = android_version_instance.to_dict()
# create an instance of AndroidVersion from a dict
android_version_from_dict = AndroidVersion.from_dict(android_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


