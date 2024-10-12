# CostScenario

Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitments** | [**List[Commitment]**](Commitment.md) | New commitments to estimate the costs for. The cost of the commitments will be included in the estimate result and discounts the commitment entitles will be included in the workload cost estimates. A maximum of 100 workloads can be provided. | [optional] 
**scenario_config** | [**ScenarioConfig**](ScenarioConfig.md) |  | [optional] 
**workloads** | [**List[Workload]**](Workload.md) | The Google Cloud usage whose costs are estimated. A maximum of 100 workloads can be provided. | [optional] 

## Example

```python
from openapi_client.models.cost_scenario import CostScenario

# TODO update the JSON string below
json = "{}"
# create an instance of CostScenario from a JSON string
cost_scenario_instance = CostScenario.from_json(json)
# print the JSON string representation of the object
print(CostScenario.to_json())

# convert the object into a dict
cost_scenario_dict = cost_scenario_instance.to_dict()
# create an instance of CostScenario from a dict
cost_scenario_from_dict = CostScenario.from_dict(cost_scenario_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


