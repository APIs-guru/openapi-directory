# SitePatchResource

ARM resource for a site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **object** | Managed service identity. | [optional] 
**properties** | **object** | SitePatchResource resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.site_patch_resource import SitePatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of SitePatchResource from a JSON string
site_patch_resource_instance = SitePatchResource.from_json(json)
# print the JSON string representation of the object
print(SitePatchResource.to_json())

# convert the object into a dict
site_patch_resource_dict = site_patch_resource_instance.to_dict()
# create an instance of SitePatchResource from a dict
site_patch_resource_from_dict = SitePatchResource.from_dict(site_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


