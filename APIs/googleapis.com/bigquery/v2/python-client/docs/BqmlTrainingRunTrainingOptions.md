# BqmlTrainingRunTrainingOptions

Deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**early_stop** | **bool** |  | [optional] 
**l1_reg** | **float** |  | [optional] 
**l2_reg** | **float** |  | [optional] 
**learn_rate** | **float** |  | [optional] 
**learn_rate_strategy** | **str** |  | [optional] 
**line_search_init_learn_rate** | **float** |  | [optional] 
**max_iteration** | **str** |  | [optional] 
**min_rel_progress** | **float** |  | [optional] 
**warm_start** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.bqml_training_run_training_options import BqmlTrainingRunTrainingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BqmlTrainingRunTrainingOptions from a JSON string
bqml_training_run_training_options_instance = BqmlTrainingRunTrainingOptions.from_json(json)
# print the JSON string representation of the object
print(BqmlTrainingRunTrainingOptions.to_json())

# convert the object into a dict
bqml_training_run_training_options_dict = bqml_training_run_training_options_instance.to_dict()
# create an instance of BqmlTrainingRunTrainingOptions from a dict
bqml_training_run_training_options_from_dict = BqmlTrainingRunTrainingOptions.from_dict(bqml_training_run_training_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


