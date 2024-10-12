# TestTiming

Testing timing break down to know phases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_process_duration** | [**Duration**](Duration.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_timing import TestTiming

# TODO update the JSON string below
json = "{}"
# create an instance of TestTiming from a JSON string
test_timing_instance = TestTiming.from_json(json)
# print the JSON string representation of the object
print(TestTiming.to_json())

# convert the object into a dict
test_timing_dict = test_timing_instance.to_dict()
# create an instance of TestTiming from a dict
test_timing_from_dict = TestTiming.from_dict(test_timing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


