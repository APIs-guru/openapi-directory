# IosTest

A iOS mobile test specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ios_app_info** | [**IosAppInfo**](IosAppInfo.md) |  | [optional] 
**ios_robo_test** | **object** | A Robo test for an iOS application. | [optional] 
**ios_test_loop** | [**IosTestLoop**](IosTestLoop.md) |  | [optional] 
**ios_xc_test** | [**IosXcTest**](IosXcTest.md) |  | [optional] 
**test_timeout** | [**Duration**](Duration.md) |  | [optional] 

## Example

```python
from openapi_client.models.ios_test import IosTest

# TODO update the JSON string below
json = "{}"
# create an instance of IosTest from a JSON string
ios_test_instance = IosTest.from_json(json)
# print the JSON string representation of the object
print(IosTest.to_json())

# convert the object into a dict
ios_test_dict = ios_test_instance.to_dict()
# create an instance of IosTest from a dict
ios_test_from_dict = IosTest.from_dict(ios_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


