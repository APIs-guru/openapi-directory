# TestRunState

Current status of a test run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_code** | **int** | The exit code that the client should use when exiting. Used for indicating status to the caller of the client. 0: test run completes with no failing tests 1: test run completes with at least one failing test 2: test run failed to complete. Status for test run is unknown  | [optional] 
**message** | **List[str]** | Multi-line message that describes the status | [optional] 
**wait_time** | **int** | Time (in seconds) that the client should wait for before checking the status again | [optional] 

## Example

```python
from openapi_client.models.test_run_state import TestRunState

# TODO update the JSON string below
json = "{}"
# create an instance of TestRunState from a JSON string
test_run_state_instance = TestRunState.from_json(json)
# print the JSON string representation of the object
print(TestRunState.to_json())

# convert the object into a dict
test_run_state_dict = test_run_state_instance.to_dict()
# create an instance of TestRunState from a dict
test_run_state_from_dict = TestRunState.from_dict(test_run_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


