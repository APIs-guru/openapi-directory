# IosRoboTest

A test that explores an iOS application on an iOS device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_bundle_id** | **str** | The bundle ID for the app-under-test. This is determined by examining the application&#39;s \&quot;Info.plist\&quot; file. | [optional] 
**app_ipa** | [**FileReference**](FileReference.md) |  | [optional] 
**robo_script** | [**FileReference**](FileReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.ios_robo_test import IosRoboTest

# TODO update the JSON string below
json = "{}"
# create an instance of IosRoboTest from a JSON string
ios_robo_test_instance = IosRoboTest.from_json(json)
# print the JSON string representation of the object
print(IosRoboTest.to_json())

# convert the object into a dict
ios_robo_test_dict = ios_robo_test_instance.to_dict()
# create an instance of IosRoboTest from a dict
ios_robo_test_from_dict = IosRoboTest.from_dict(ios_robo_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


