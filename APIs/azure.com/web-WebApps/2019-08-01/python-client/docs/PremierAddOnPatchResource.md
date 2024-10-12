# PremierAddOnPatchResource

ARM resource for a PremierAddOn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | PremierAddOnPatchResource resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.premier_add_on_patch_resource import PremierAddOnPatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of PremierAddOnPatchResource from a JSON string
premier_add_on_patch_resource_instance = PremierAddOnPatchResource.from_json(json)
# print the JSON string representation of the object
print(PremierAddOnPatchResource.to_json())

# convert the object into a dict
premier_add_on_patch_resource_dict = premier_add_on_patch_resource_instance.to_dict()
# create an instance of PremierAddOnPatchResource from a dict
premier_add_on_patch_resource_from_dict = PremierAddOnPatchResource.from_dict(premier_add_on_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


