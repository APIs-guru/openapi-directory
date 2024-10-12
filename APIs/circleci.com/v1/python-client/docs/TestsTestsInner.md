# TestsTestsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classname** | **str** |  | [optional] 
**file** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**result** | [**Status**](Status.md) |  | [optional] 
**run_time** | **float** |  | [optional] 
**source** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tests_tests_inner import TestsTestsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestsTestsInner from a JSON string
tests_tests_inner_instance = TestsTestsInner.from_json(json)
# print the JSON string representation of the object
print(TestsTestsInner.to_json())

# convert the object into a dict
tests_tests_inner_dict = tests_tests_inner_instance.to_dict()
# create an instance of TestsTestsInner from a dict
tests_tests_inner_from_dict = TestsTestsInner.from_dict(tests_tests_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


