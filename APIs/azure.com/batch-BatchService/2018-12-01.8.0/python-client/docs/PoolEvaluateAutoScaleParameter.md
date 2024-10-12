# PoolEvaluateAutoScaleParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scale_formula** | **str** | The formula is validated and its results calculated, but it is not applied to the pool. To apply the formula to the pool, &#39;Enable automatic scaling on a pool&#39;. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). | 

## Example

```python
from openapi_client.models.pool_evaluate_auto_scale_parameter import PoolEvaluateAutoScaleParameter

# TODO update the JSON string below
json = "{}"
# create an instance of PoolEvaluateAutoScaleParameter from a JSON string
pool_evaluate_auto_scale_parameter_instance = PoolEvaluateAutoScaleParameter.from_json(json)
# print the JSON string representation of the object
print(PoolEvaluateAutoScaleParameter.to_json())

# convert the object into a dict
pool_evaluate_auto_scale_parameter_dict = pool_evaluate_auto_scale_parameter_instance.to_dict()
# create an instance of PoolEvaluateAutoScaleParameter from a dict
pool_evaluate_auto_scale_parameter_from_dict = PoolEvaluateAutoScaleParameter.from_dict(pool_evaluate_auto_scale_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


