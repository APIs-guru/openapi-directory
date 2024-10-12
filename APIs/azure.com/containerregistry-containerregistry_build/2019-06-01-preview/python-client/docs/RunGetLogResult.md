# RunGetLogResult

The result of get log link operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_link** | **str** | The link to logs for a run on a azure container registry. | [optional] 

## Example

```python
from openapi_client.models.run_get_log_result import RunGetLogResult

# TODO update the JSON string below
json = "{}"
# create an instance of RunGetLogResult from a JSON string
run_get_log_result_instance = RunGetLogResult.from_json(json)
# print the JSON string representation of the object
print(RunGetLogResult.to_json())

# convert the object into a dict
run_get_log_result_dict = run_get_log_result_instance.to_dict()
# create an instance of RunGetLogResult from a dict
run_get_log_result_from_dict = RunGetLogResult.from_dict(run_get_log_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


