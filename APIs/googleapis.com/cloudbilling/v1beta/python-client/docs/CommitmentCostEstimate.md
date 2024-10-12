# CommitmentCostEstimate

Estimated cost for a commitment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_total_cost_estimate** | [**CostEstimate**](CostEstimate.md) |  | [optional] 
**name** | **str** | The name of the commitment, as specified in the &#x60;CostScenario&#x60;. | [optional] 
**sku_cost_estimates** | [**List[SkuCostEstimate]**](SkuCostEstimate.md) | Estimated costs for each SKU in the commitment. | [optional] 

## Example

```python
from openapi_client.models.commitment_cost_estimate import CommitmentCostEstimate

# TODO update the JSON string below
json = "{}"
# create an instance of CommitmentCostEstimate from a JSON string
commitment_cost_estimate_instance = CommitmentCostEstimate.from_json(json)
# print the JSON string representation of the object
print(CommitmentCostEstimate.to_json())

# convert the object into a dict
commitment_cost_estimate_dict = commitment_cost_estimate_instance.to_dict()
# create an instance of CommitmentCostEstimate from a dict
commitment_cost_estimate_from_dict = CommitmentCostEstimate.from_dict(commitment_cost_estimate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


