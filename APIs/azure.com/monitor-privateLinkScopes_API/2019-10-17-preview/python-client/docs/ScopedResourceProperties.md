# ScopedResourceProperties

Properties of a private link scoped resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_resource_id** | **str** | The resource id of the scoped Azure monitor resource. | [optional] 
**provisioning_state** | **str** | State of the private endpoint connection. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scoped_resource_properties import ScopedResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScopedResourceProperties from a JSON string
scoped_resource_properties_instance = ScopedResourceProperties.from_json(json)
# print the JSON string representation of the object
print(ScopedResourceProperties.to_json())

# convert the object into a dict
scoped_resource_properties_dict = scoped_resource_properties_instance.to_dict()
# create an instance of ScopedResourceProperties from a dict
scoped_resource_properties_from_dict = ScopedResourceProperties.from_dict(scoped_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


