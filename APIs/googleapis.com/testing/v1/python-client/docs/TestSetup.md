# TestSetup

A description of how to set up the Android device prior to running the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**additional_apks** | [**List[Apk]**](Apk.md) | APKs to install in addition to those being directly tested. These will be installed after the app under test. Currently capped at 100. | [optional] 
**directories_to_pull** | **List[str]** | List of directories on the device to upload to GCS at the end of the test; they must be absolute paths under /sdcard, /storage or /data/local/tmp. Path names are restricted to characters a-z A-Z 0-9 _ - . + and / Note: The paths /sdcard and /data will be made available and treated as implicit path substitutions. E.g. if /sdcard on a particular device does not map to external storage, the system will replace it with the external storage path prefix for that device. | [optional] 
**dont_autogrant_permissions** | **bool** | Whether to prevent all runtime permissions to be granted at app install | [optional] 
**environment_variables** | [**List[EnvironmentVariable]**](EnvironmentVariable.md) | Environment variables to set for the test (only applicable for instrumentation tests). | [optional] 
**files_to_push** | [**List[DeviceFile]**](DeviceFile.md) | List of files to push to the device before starting the test. | [optional] 
**initial_setup_apks** | [**List[Apk]**](Apk.md) | Optional. Initial setup APKs to install before the app under test is installed. Currently capped at 100. | [optional] 
**network_profile** | **str** | The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. | [optional] 
**systrace** | [**SystraceSetup**](SystraceSetup.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_setup import TestSetup

# TODO update the JSON string below
json = "{}"
# create an instance of TestSetup from a JSON string
test_setup_instance = TestSetup.from_json(json)
# print the JSON string representation of the object
print(TestSetup.to_json())

# convert the object into a dict
test_setup_dict = test_setup_instance.to_dict()
# create an instance of TestSetup from a dict
test_setup_from_dict = TestSetup.from_dict(test_setup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


