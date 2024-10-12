# AndroidMatrix

A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_model_ids** | **List[str]** | Required. The ids of the set of Android device to be used. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**android_version_ids** | **List[str]** | Required. The ids of the set of Android OS version to be used. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**locales** | **List[str]** | Required. The set of locales the test device will enable for testing. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**orientations** | **List[str]** | Required. The set of orientations to test with. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 

## Example

```python
from openapi_client.models.android_matrix import AndroidMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidMatrix from a JSON string
android_matrix_instance = AndroidMatrix.from_json(json)
# print the JSON string representation of the object
print(AndroidMatrix.to_json())

# convert the object into a dict
android_matrix_dict = android_matrix_instance.to_dict()
# create an instance of AndroidMatrix from a dict
android_matrix_from_dict = AndroidMatrix.from_dict(android_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


