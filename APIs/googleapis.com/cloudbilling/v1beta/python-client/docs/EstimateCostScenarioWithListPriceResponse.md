# EstimateCostScenarioWithListPriceResponse

Response for EstimateCostScenarioWithListPrice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_estimation_result** | [**CostEstimationResult**](CostEstimationResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.estimate_cost_scenario_with_list_price_response import EstimateCostScenarioWithListPriceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EstimateCostScenarioWithListPriceResponse from a JSON string
estimate_cost_scenario_with_list_price_response_instance = EstimateCostScenarioWithListPriceResponse.from_json(json)
# print the JSON string representation of the object
print(EstimateCostScenarioWithListPriceResponse.to_json())

# convert the object into a dict
estimate_cost_scenario_with_list_price_response_dict = estimate_cost_scenario_with_list_price_response_instance.to_dict()
# create an instance of EstimateCostScenarioWithListPriceResponse from a dict
estimate_cost_scenario_with_list_price_response_from_dict = EstimateCostScenarioWithListPriceResponse.from_dict(estimate_cost_scenario_with_list_price_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


