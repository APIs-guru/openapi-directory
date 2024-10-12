# LabCostSummaryProperties

The properties of the cost summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_lab_cost** | **float** | The cost component of the cost item. | [optional] 

## Example

```python
from openapi_client.models.lab_cost_summary_properties import LabCostSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabCostSummaryProperties from a JSON string
lab_cost_summary_properties_instance = LabCostSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(LabCostSummaryProperties.to_json())

# convert the object into a dict
lab_cost_summary_properties_dict = lab_cost_summary_properties_instance.to_dict()
# create an instance of LabCostSummaryProperties from a dict
lab_cost_summary_properties_from_dict = LabCostSummaryProperties.from_dict(lab_cost_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


