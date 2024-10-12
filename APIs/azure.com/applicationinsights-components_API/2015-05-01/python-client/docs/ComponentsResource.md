# ComponentsResource

An azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.components_resource import ComponentsResource

# TODO update the JSON string below
json = "{}"
# create an instance of ComponentsResource from a JSON string
components_resource_instance = ComponentsResource.from_json(json)
# print the JSON string representation of the object
print(ComponentsResource.to_json())

# convert the object into a dict
components_resource_dict = components_resource_instance.to_dict()
# create an instance of ComponentsResource from a dict
components_resource_from_dict = ComponentsResource.from_dict(components_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


