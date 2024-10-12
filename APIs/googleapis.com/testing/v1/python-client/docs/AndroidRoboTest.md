# AndroidRoboTest

A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_apk** | [**FileReference**](FileReference.md) |  | [optional] 
**app_bundle** | [**AppBundle**](AppBundle.md) |  | [optional] 
**app_initial_activity** | **str** | The initial activity that should be used to start the app. | [optional] 
**app_package_id** | **str** | The java package for the application under test. The default value is determined by examining the application&#39;s manifest. | [optional] 
**max_depth** | **int** | The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50. | [optional] 
**max_steps** | **int** | The max number of steps Robo can execute. Default is no limit. | [optional] 
**robo_directives** | [**List[RoboDirective]**](RoboDirective.md) | A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided. | [optional] 
**robo_mode** | **str** | The mode in which Robo should run. Most clients should allow the server to populate this field automatically. | [optional] 
**robo_script** | [**FileReference**](FileReference.md) |  | [optional] 
**starting_intents** | [**List[RoboStartingIntent]**](RoboStartingIntent.md) | The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly). | [optional] 

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


