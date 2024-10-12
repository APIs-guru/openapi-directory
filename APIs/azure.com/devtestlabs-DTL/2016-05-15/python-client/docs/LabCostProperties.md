# LabCostProperties

Properties of a cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The creation date of the cost. | [optional] 
**currency_code** | **str** | The currency code of the cost. | [optional] 
**end_date_time** | **datetime** | The end time of the cost data. | [optional] 
**lab_cost_details** | [**List[LabCostDetailsProperties]**](LabCostDetailsProperties.md) | The lab cost details component of the cost data. | [optional] [readonly] 
**lab_cost_summary** | [**LabCostSummaryProperties**](LabCostSummaryProperties.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**resource_costs** | [**List[LabResourceCostProperties]**](LabResourceCostProperties.md) | The resource cost component of the cost data. | [optional] [readonly] 
**start_date_time** | **datetime** | The start time of the cost data. | [optional] 
**target_cost** | [**TargetCostProperties**](TargetCostProperties.md) |  | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.lab_cost_properties import LabCostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabCostProperties from a JSON string
lab_cost_properties_instance = LabCostProperties.from_json(json)
# print the JSON string representation of the object
print(LabCostProperties.to_json())

# convert the object into a dict
lab_cost_properties_dict = lab_cost_properties_instance.to_dict()
# create an instance of LabCostProperties from a dict
lab_cost_properties_from_dict = LabCostProperties.from_dict(lab_cost_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


