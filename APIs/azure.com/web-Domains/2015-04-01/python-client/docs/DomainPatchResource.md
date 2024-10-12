# DomainPatchResource

ARM resource for a domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DomainPatchResource resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_patch_resource import DomainPatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of DomainPatchResource from a JSON string
domain_patch_resource_instance = DomainPatchResource.from_json(json)
# print the JSON string representation of the object
print(DomainPatchResource.to_json())

# convert the object into a dict
domain_patch_resource_dict = domain_patch_resource_instance.to_dict()
# create an instance of DomainPatchResource from a dict
domain_patch_resource_from_dict = DomainPatchResource.from_dict(domain_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


