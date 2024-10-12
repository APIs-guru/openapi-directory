# StartRunResult

Contains the details of a run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_id** | **str** | The identifier for a run. | 

## Example

```python
from openapi_client.models.start_run_result import StartRunResult

# TODO update the JSON string below
json = "{}"
# create an instance of StartRunResult from a JSON string
start_run_result_instance = StartRunResult.from_json(json)
# print the JSON string representation of the object
print(StartRunResult.to_json())

# convert the object into a dict
start_run_result_dict = start_run_result_instance.to_dict()
# create an instance of StartRunResult from a dict
start_run_result_from_dict = StartRunResult.from_dict(start_run_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


