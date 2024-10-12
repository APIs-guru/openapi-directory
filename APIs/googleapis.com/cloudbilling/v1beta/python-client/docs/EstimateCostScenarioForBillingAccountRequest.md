# EstimateCostScenarioForBillingAccountRequest

Request for EstimateCostScenarioForBillingAccount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_scenario** | [**CostScenario**](CostScenario.md) |  | [optional] 

## Example

```python
from openapi_client.models.estimate_cost_scenario_for_billing_account_request import EstimateCostScenarioForBillingAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EstimateCostScenarioForBillingAccountRequest from a JSON string
estimate_cost_scenario_for_billing_account_request_instance = EstimateCostScenarioForBillingAccountRequest.from_json(json)
# print the JSON string representation of the object
print(EstimateCostScenarioForBillingAccountRequest.to_json())

# convert the object into a dict
estimate_cost_scenario_for_billing_account_request_dict = estimate_cost_scenario_for_billing_account_request_instance.to_dict()
# create an instance of EstimateCostScenarioForBillingAccountRequest from a dict
estimate_cost_scenario_for_billing_account_request_from_dict = EstimateCostScenarioForBillingAccountRequest.from_dict(estimate_cost_scenario_for_billing_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


