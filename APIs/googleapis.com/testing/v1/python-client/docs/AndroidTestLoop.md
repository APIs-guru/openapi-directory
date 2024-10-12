# AndroidTestLoop

A test of an Android Application with a Test Loop. The intent \\ will be implicitly added, since Games is the only user of this api, for the time being.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_apk** | [**FileReference**](FileReference.md) |  | [optional] 
**app_bundle** | [**AppBundle**](AppBundle.md) |  | [optional] 
**app_package_id** | **str** | The java package for the application under test. The default is determined by examining the application&#39;s manifest. | [optional] 
**scenario_labels** | **List[str]** | The list of scenario labels that should be run during the test. The scenario labels should map to labels defined in the application&#39;s manifest. For example, player_experience and com.google.test.loops.player_experience add all of the loops labeled in the manifest with the com.google.test.loops.player_experience name to the execution. Scenarios can also be specified in the scenarios field. | [optional] 
**scenarios** | **List[int]** | The list of scenarios that should be run during the test. The default is all test loops, derived from the application&#39;s manifest. | [optional] 

## Example

```python
from openapi_client.models.android_test_loop import AndroidTestLoop

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidTestLoop from a JSON string
android_test_loop_instance = AndroidTestLoop.from_json(json)
# print the JSON string representation of the object
print(AndroidTestLoop.to_json())

# convert the object into a dict
android_test_loop_dict = android_test_loop_instance.to_dict()
# create an instance of AndroidTestLoop from a dict
android_test_loop_from_dict = AndroidTestLoop.from_dict(android_test_loop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


