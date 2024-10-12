# WorkloadCostEstimate

Estimated cost for a workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the workload, as specified in the &#x60;CostScenario&#x60;. | [optional] 
**sku_cost_estimates** | [**List[SkuCostEstimate]**](SkuCostEstimate.md) | Estimated costs for each SKU in the workload. | [optional] 
**workload_total_cost_estimate** | [**CostEstimate**](CostEstimate.md) |  | [optional] 

## Example

```python
from openapi_client.models.workload_cost_estimate import WorkloadCostEstimate

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadCostEstimate from a JSON string
workload_cost_estimate_instance = WorkloadCostEstimate.from_json(json)
# print the JSON string representation of the object
print(WorkloadCostEstimate.to_json())

# convert the object into a dict
workload_cost_estimate_dict = workload_cost_estimate_instance.to_dict()
# create an instance of WorkloadCostEstimate from a dict
workload_cost_estimate_from_dict = WorkloadCostEstimate.from_dict(workload_cost_estimate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


