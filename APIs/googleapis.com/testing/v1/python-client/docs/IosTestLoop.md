# IosTestLoop

A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_bundle_id** | **str** | Output only. The bundle id for the application under test. | [optional] 
**app_ipa** | [**FileReference**](FileReference.md) |  | [optional] 
**scenarios** | **List[int]** | The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified. | [optional] 

## Example

```python
from openapi_client.models.ios_test_loop import IosTestLoop

# TODO update the JSON string below
json = "{}"
# create an instance of IosTestLoop from a JSON string
ios_test_loop_instance = IosTestLoop.from_json(json)
# print the JSON string representation of the object
print(IosTestLoop.to_json())

# convert the object into a dict
ios_test_loop_dict = ios_test_loop_instance.to_dict()
# create an instance of IosTestLoop from a dict
ios_test_loop_from_dict = IosTestLoop.from_dict(ios_test_loop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


