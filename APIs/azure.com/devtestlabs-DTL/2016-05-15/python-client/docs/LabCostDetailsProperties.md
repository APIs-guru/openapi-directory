# LabCostDetailsProperties

The properties of a lab cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | The cost component of the cost item. | [optional] 
**cost_type** | **str** | The type of the cost. | [optional] 
**var_date** | **datetime** | The date of the cost item. | [optional] 

## Example

```python
from openapi_client.models.lab_cost_details_properties import LabCostDetailsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabCostDetailsProperties from a JSON string
lab_cost_details_properties_instance = LabCostDetailsProperties.from_json(json)
# print the JSON string representation of the object
print(LabCostDetailsProperties.to_json())

# convert the object into a dict
lab_cost_details_properties_dict = lab_cost_details_properties_instance.to_dict()
# create an instance of LabCostDetailsProperties from a dict
lab_cost_details_properties_from_dict = LabCostDetailsProperties.from_dict(lab_cost_details_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


