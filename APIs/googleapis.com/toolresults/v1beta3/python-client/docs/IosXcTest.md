# IosXcTest

A test of an iOS application that uses the XCTest framework.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | Bundle ID of the app. | [optional] 
**xcode_version** | **str** | Xcode version that the test was run with. | [optional] 

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


