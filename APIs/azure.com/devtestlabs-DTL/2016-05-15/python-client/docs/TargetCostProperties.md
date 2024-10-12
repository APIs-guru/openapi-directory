# TargetCostProperties

Properties of a cost target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_thresholds** | [**List[CostThresholdProperties]**](CostThresholdProperties.md) | Cost thresholds. | [optional] 
**cycle_end_date_time** | **datetime** | Reporting cycle end date. | [optional] 
**cycle_start_date_time** | **datetime** | Reporting cycle start date. | [optional] 
**cycle_type** | **str** | Reporting cycle type. | [optional] 
**status** | **str** | Target cost status | [optional] 
**target** | **int** | Lab target cost | [optional] 

## Example

```python
from openapi_client.models.target_cost_properties import TargetCostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TargetCostProperties from a JSON string
target_cost_properties_instance = TargetCostProperties.from_json(json)
# print the JSON string representation of the object
print(TargetCostProperties.to_json())

# convert the object into a dict
target_cost_properties_dict = target_cost_properties_instance.to_dict()
# create an instance of TargetCostProperties from a dict
target_cost_properties_from_dict = TargetCostProperties.from_dict(target_cost_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


