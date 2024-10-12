# ScopedResource

A private link scoped resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScopedResourceProperties**](ScopedResourceProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scoped_resource import ScopedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ScopedResource from a JSON string
scoped_resource_instance = ScopedResource.from_json(json)
# print the JSON string representation of the object
print(ScopedResource.to_json())

# convert the object into a dict
scoped_resource_dict = scoped_resource_instance.to_dict()
# create an instance of ScopedResource from a dict
scoped_resource_from_dict = ScopedResource.from_dict(scoped_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


