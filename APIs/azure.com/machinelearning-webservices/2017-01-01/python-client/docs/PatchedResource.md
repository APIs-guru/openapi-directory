# PatchedResource

Azure resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**location** | **str** | Specifies the location of the resource. | [optional] [readonly] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.patched_resource import PatchedResource

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedResource from a JSON string
patched_resource_instance = PatchedResource.from_json(json)
# print the JSON string representation of the object
print(PatchedResource.to_json())

# convert the object into a dict
patched_resource_dict = patched_resource_instance.to_dict()
# create an instance of PatchedResource from a dict
patched_resource_from_dict = PatchedResource.from_dict(patched_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


