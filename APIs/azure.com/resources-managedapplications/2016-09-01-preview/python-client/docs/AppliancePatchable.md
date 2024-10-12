# AppliancePatchable

Information about appliance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the appliance. Allowed values are MarketPlace and ServiceCatalog. | [optional] 
**plan** | [**PlanPatchable**](PlanPatchable.md) |  | [optional] 
**properties** | [**AppliancePropertiesPatchable**](AppliancePropertiesPatchable.md) |  | [optional] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**managed_by** | **str** | ID of the resource that manages this resource. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.appliance_patchable import AppliancePatchable

# TODO update the JSON string below
json = "{}"
# create an instance of AppliancePatchable from a JSON string
appliance_patchable_instance = AppliancePatchable.from_json(json)
# print the JSON string representation of the object
print(AppliancePatchable.to_json())

# convert the object into a dict
appliance_patchable_dict = appliance_patchable_instance.to_dict()
# create an instance of AppliancePatchable from a dict
appliance_patchable_from_dict = AppliancePatchable.from_dict(appliance_patchable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


