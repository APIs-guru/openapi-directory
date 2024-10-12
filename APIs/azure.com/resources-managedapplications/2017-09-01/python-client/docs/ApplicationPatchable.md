# ApplicationPatchable

Information about managed application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. | [optional] 
**plan** | [**PlanPatchable**](PlanPatchable.md) |  | [optional] 
**properties** | [**ApplicationPropertiesPatchable**](ApplicationPropertiesPatchable.md) |  | [optional] 
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
from openapi_client.models.application_patchable import ApplicationPatchable

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPatchable from a JSON string
application_patchable_instance = ApplicationPatchable.from_json(json)
# print the JSON string representation of the object
print(ApplicationPatchable.to_json())

# convert the object into a dict
application_patchable_dict = application_patchable_instance.to_dict()
# create an instance of ApplicationPatchable from a dict
application_patchable_from_dict = ApplicationPatchable.from_dict(application_patchable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


