# RunListResult

Collection of runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[Run]**](Run.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.run_list_result import RunListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RunListResult from a JSON string
run_list_result_instance = RunListResult.from_json(json)
# print the JSON string representation of the object
print(RunListResult.to_json())

# convert the object into a dict
run_list_result_dict = run_list_result_instance.to_dict()
# create an instance of RunListResult from a dict
run_list_result_from_dict = RunListResult.from_dict(run_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


