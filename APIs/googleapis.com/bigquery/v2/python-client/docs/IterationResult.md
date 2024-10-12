# IterationResult

Information about a single iteration of the training run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arima_result** | [**ArimaResult**](ArimaResult.md) |  | [optional] 
**cluster_infos** | [**List[ClusterInfo]**](ClusterInfo.md) | Information about top clusters for clustering models. | [optional] 
**duration_ms** | **str** | Time taken to run the iteration in milliseconds. | [optional] 
**eval_loss** | **float** | Loss computed on the eval data at the end of iteration. | [optional] 
**index** | **int** | Index of the iteration, 0 based. | [optional] 
**learn_rate** | **float** | Learn rate used for this iteration. | [optional] 
**principal_component_infos** | [**List[PrincipalComponentInfo]**](PrincipalComponentInfo.md) | The information of the principal components. | [optional] 
**training_loss** | **float** | Loss computed on the training data at the end of iteration. | [optional] 

## Example

```python
from openapi_client.models.iteration_result import IterationResult

# TODO update the JSON string below
json = "{}"
# create an instance of IterationResult from a JSON string
iteration_result_instance = IterationResult.from_json(json)
# print the JSON string representation of the object
print(IterationResult.to_json())

# convert the object into a dict
iteration_result_dict = iteration_result_instance.to_dict()
# create an instance of IterationResult from a dict
iteration_result_from_dict = IterationResult.from_dict(iteration_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


