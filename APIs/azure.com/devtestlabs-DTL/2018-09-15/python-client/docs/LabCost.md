# LabCost

A cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LabCostProperties**](LabCostProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_cost import LabCost

# TODO update the JSON string below
json = "{}"
# create an instance of LabCost from a JSON string
lab_cost_instance = LabCost.from_json(json)
# print the JSON string representation of the object
print(LabCost.to_json())

# convert the object into a dict
lab_cost_dict = lab_cost_instance.to_dict()
# create an instance of LabCost from a dict
lab_cost_from_dict = LabCost.from_dict(lab_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


