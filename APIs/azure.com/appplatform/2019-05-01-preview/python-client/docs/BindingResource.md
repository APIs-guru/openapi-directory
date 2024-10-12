# BindingResource

Binding resource payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BindingResourceProperties**](BindingResourceProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.binding_resource import BindingResource

# TODO update the JSON string below
json = "{}"
# create an instance of BindingResource from a JSON string
binding_resource_instance = BindingResource.from_json(json)
# print the JSON string representation of the object
print(BindingResource.to_json())

# convert the object into a dict
binding_resource_dict = binding_resource_instance.to_dict()
# create an instance of BindingResource from a dict
binding_resource_from_dict = BindingResource.from_dict(binding_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


