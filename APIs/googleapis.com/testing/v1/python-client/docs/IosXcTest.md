# IosXcTest

A test of an iOS application that uses the XCTest framework. Xcode supports the option to \"build for testing\", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_bundle_id** | **str** | Output only. The bundle id for the application under test. | [optional] 
**test_special_entitlements** | **bool** | The option to test special app entitlements. Setting this would re-sign the app having special entitlements with an explicit application-identifier. Currently supports testing aps-environment entitlement. | [optional] 
**tests_zip** | [**FileReference**](FileReference.md) |  | [optional] 
**xcode_version** | **str** | The Xcode version that should be used for the test. Use the TestEnvironmentDiscoveryService to get supported options. Defaults to the latest Xcode version Firebase Test Lab supports. | [optional] 
**xctestrun** | [**FileReference**](FileReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.ios_xc_test import IosXcTest

# TODO update the JSON string below
json = "{}"
# create an instance of IosXcTest from a JSON string
ios_xc_test_instance = IosXcTest.from_json(json)
# print the JSON string representation of the object
print(IosXcTest.to_json())

# convert the object into a dict
ios_xc_test_dict = ios_xc_test_instance.to_dict()
# create an instance of IosXcTest from a dict
ios_xc_test_from_dict = IosXcTest.from_dict(ios_xc_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


