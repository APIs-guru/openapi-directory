# SdkBug

A bug found in the Dataflow SDK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**severity** | **str** | Output only. How severe the SDK bug is. | [optional] [readonly] 
**type** | **str** | Output only. Describes the impact of this SDK bug. | [optional] [readonly] 
**uri** | **str** | Output only. Link to more information on the bug. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sdk_bug import SdkBug

# TODO update the JSON string below
json = "{}"
# create an instance of SdkBug from a JSON string
sdk_bug_instance = SdkBug.from_json(json)
# print the JSON string representation of the object
print(SdkBug.to_json())

# convert the object into a dict
sdk_bug_dict = sdk_bug_instance.to_dict()
# create an instance of SdkBug from a dict
sdk_bug_from_dict = SdkBug.from_dict(sdk_bug_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


