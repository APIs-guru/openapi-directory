# BqmlIterationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_ms** | **str** | Deprecated. | [optional] 
**eval_loss** | **float** | Deprecated. | [optional] 
**index** | **int** | Deprecated. | [optional] 
**learn_rate** | **float** | Deprecated. | [optional] 
**training_loss** | **float** | Deprecated. | [optional] 

## Example

```python
from openapi_client.models.bqml_iteration_result import BqmlIterationResult

# TODO update the JSON string below
json = "{}"
# create an instance of BqmlIterationResult from a JSON string
bqml_iteration_result_instance = BqmlIterationResult.from_json(json)
# print the JSON string representation of the object
print(BqmlIterationResult.to_json())

# convert the object into a dict
bqml_iteration_result_dict = bqml_iteration_result_instance.to_dict()
# create an instance of BqmlIterationResult from a dict
bqml_iteration_result_from_dict = BqmlIterationResult.from_dict(bqml_iteration_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


