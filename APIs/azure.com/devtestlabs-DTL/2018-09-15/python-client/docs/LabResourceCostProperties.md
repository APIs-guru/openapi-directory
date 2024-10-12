# LabResourceCostProperties

The properties of a resource cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_resource_id** | **str** | The ID of the external resource | [optional] 
**resource_cost** | **float** | The cost component of the resource cost item. | [optional] 
**resource_id** | **str** | The ID of the resource | [optional] 
**resource_owner** | **str** | The owner of the resource (ex. janedoe@microsoft.com) | [optional] 
**resource_pricing_tier** | **str** | The category of the resource (ex. Premium_LRS, Standard_DS1) | [optional] 
**resource_status** | **str** | The status of the resource (ex. Active) | [optional] 
**resource_type** | **str** | The logical resource type (ex. virtualmachine, storageaccount) | [optional] 
**resource_uid** | **str** | The unique identifier of the resource. | [optional] 
**resourcename** | **str** | The name of the resource. | [optional] 

## Example

```python
from openapi_client.models.lab_resource_cost_properties import LabResourceCostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabResourceCostProperties from a JSON string
lab_resource_cost_properties_instance = LabResourceCostProperties.from_json(json)
# print the JSON string representation of the object
print(LabResourceCostProperties.to_json())

# convert the object into a dict
lab_resource_cost_properties_dict = lab_resource_cost_properties_instance.to_dict()
# create an instance of LabResourceCostProperties from a dict
lab_resource_cost_properties_from_dict = LabResourceCostProperties.from_dict(lab_resource_cost_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


