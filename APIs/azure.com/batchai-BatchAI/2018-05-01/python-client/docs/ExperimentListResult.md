# ExperimentListResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] [readonly] 
**value** | [**List[Experiment]**](Experiment.md) | The collection of experiments. | [optional] [readonly] 

## Example

```python
from openapi_client.models.experiment_list_result import ExperimentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExperimentListResult from a JSON string
experiment_list_result_instance = ExperimentListResult.from_json(json)
# print the JSON string representation of the object
print(ExperimentListResult.to_json())

# convert the object into a dict
experiment_list_result_dict = experiment_list_result_instance.to_dict()
# create an instance of ExperimentListResult from a dict
experiment_list_result_from_dict = ExperimentListResult.from_dict(experiment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


