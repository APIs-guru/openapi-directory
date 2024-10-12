# IosTestSetup

A description of how to set up an iOS device prior to running the test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_ipas** | [**List[FileReference]**](FileReference.md) | iOS apps to install in addition to those being directly tested. | [optional] 
**network_profile** | **str** | The network traffic profile used for running the test. Available network profiles can be queried by using the NETWORK_CONFIGURATION environment type when calling TestEnvironmentDiscoveryService.GetTestEnvironmentCatalog. | [optional] 
**pull_directories** | [**List[IosDeviceFile]**](IosDeviceFile.md) | List of directories on the device to upload to Cloud Storage at the end of the test. Directories should either be in a shared directory (such as /private/var/mobile/Media) or within an accessible directory inside the app&#39;s filesystem (such as /Documents) by specifying the bundle ID. | [optional] 
**push_files** | [**List[IosDeviceFile]**](IosDeviceFile.md) | List of files to push to the device before starting the test. | [optional] 

## Example

```python
from openapi_client.models.ios_test_setup import IosTestSetup

# TODO update the JSON string below
json = "{}"
# create an instance of IosTestSetup from a JSON string
ios_test_setup_instance = IosTestSetup.from_json(json)
# print the JSON string representation of the object
print(IosTestSetup.to_json())

# convert the object into a dict
ios_test_setup_dict = ios_test_setup_instance.to_dict()
# create an instance of IosTestSetup from a dict
ios_test_setup_from_dict = IosTestSetup.from_dict(ios_test_setup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


