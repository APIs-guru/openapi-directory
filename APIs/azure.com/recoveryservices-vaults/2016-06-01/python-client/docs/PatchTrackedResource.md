# PatchTrackedResource

Tracked resource with location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.patch_tracked_resource import PatchTrackedResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatchTrackedResource from a JSON string
patch_tracked_resource_instance = PatchTrackedResource.from_json(json)
# print the JSON string representation of the object
print(PatchTrackedResource.to_json())

# convert the object into a dict
patch_tracked_resource_dict = patch_tracked_resource_instance.to_dict()
# create an instance of PatchTrackedResource from a dict
patch_tracked_resource_from_dict = PatchTrackedResource.from_dict(patch_tracked_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


