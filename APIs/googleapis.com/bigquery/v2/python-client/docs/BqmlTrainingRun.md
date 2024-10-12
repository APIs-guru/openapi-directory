# BqmlTrainingRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iteration_results** | [**List[BqmlIterationResult]**](BqmlIterationResult.md) | Deprecated. | [optional] 
**start_time** | **datetime** | Deprecated. | [optional] 
**state** | **str** | Deprecated. | [optional] 
**training_options** | [**BqmlTrainingRunTrainingOptions**](BqmlTrainingRunTrainingOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.bqml_training_run import BqmlTrainingRun

# TODO update the JSON string below
json = "{}"
# create an instance of BqmlTrainingRun from a JSON string
bqml_training_run_instance = BqmlTrainingRun.from_json(json)
# print the JSON string representation of the object
print(BqmlTrainingRun.to_json())

# convert the object into a dict
bqml_training_run_dict = bqml_training_run_instance.to_dict()
# create an instance of BqmlTrainingRun from a dict
bqml_training_run_from_dict = BqmlTrainingRun.from_dict(bqml_training_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


