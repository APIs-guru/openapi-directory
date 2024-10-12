# AndroidRoboTest

A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_initial_activity** | **str** | The initial activity that should be used to start the app. Optional | [optional] 
**bootstrap_package_id** | **str** | The java package for the bootstrap. Optional | [optional] 
**bootstrap_runner_class** | **str** | The runner class for the bootstrap. Optional | [optional] 
**max_depth** | **int** | The max depth of the traversal stack Robo can explore. Optional | [optional] 
**max_steps** | **int** | The max number of steps/actions Robo can execute. Default is no limit (0). Optional | [optional] 

## Example

```python
from openapi_client.models.android_robo_test import AndroidRoboTest

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidRoboTest from a JSON string
android_robo_test_instance = AndroidRoboTest.from_json(json)
# print the JSON string representation of the object
print(AndroidRoboTest.to_json())

# convert the object into a dict
android_robo_test_dict = android_robo_test_instance.to_dict()
# create an instance of AndroidRoboTest from a dict
android_robo_test_from_dict = AndroidRoboTest.from_dict(android_robo_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


