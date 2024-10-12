# CostEstimate

An estimated cost.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_estimates** | [**List[CreditEstimate]**](CreditEstimate.md) | The estimated credits applied. | [optional] 
**net_cost_estimate** | [**Money**](Money.md) |  | [optional] 
**pre_credit_cost_estimate** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.cost_estimate import CostEstimate

# TODO update the JSON string below
json = "{}"
# create an instance of CostEstimate from a JSON string
cost_estimate_instance = CostEstimate.from_json(json)
# print the JSON string representation of the object
print(CostEstimate.to_json())

# convert the object into a dict
cost_estimate_dict = cost_estimate_instance.to_dict()
# create an instance of CostEstimate from a dict
cost_estimate_from_dict = CostEstimate.from_dict(cost_estimate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


