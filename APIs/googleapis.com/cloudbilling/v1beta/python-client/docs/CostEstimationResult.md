# CostEstimationResult

The result of a estimating the costs of a `CostScenario`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Required. The ISO 4217 currency code for the cost estimate. | [optional] 
**segment_cost_estimates** | [**List[SegmentCostEstimate]**](SegmentCostEstimate.md) | Required. Estimated costs for each idealized month of a &#x60;CostScenario&#x60;. | [optional] 
**skus** | [**List[Sku]**](Sku.md) | Required. Information about SKUs used in the estimate. | [optional] 

## Example

```python
from openapi_client.models.cost_estimation_result import CostEstimationResult

# TODO update the JSON string below
json = "{}"
# create an instance of CostEstimationResult from a JSON string
cost_estimation_result_instance = CostEstimationResult.from_json(json)
# print the JSON string representation of the object
print(CostEstimationResult.to_json())

# convert the object into a dict
cost_estimation_result_dict = cost_estimation_result_instance.to_dict()
# create an instance of CostEstimationResult from a dict
cost_estimation_result_from_dict = CostEstimationResult.from_dict(cost_estimation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


