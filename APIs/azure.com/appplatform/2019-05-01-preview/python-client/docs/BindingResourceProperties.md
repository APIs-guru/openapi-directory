# BindingResourceProperties

Binding resource properties payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding_parameters** | **Dict[str, object]** | Binding parameters of the Binding resource | [optional] 
**created_at** | **str** | Creation time of the Binding resource | [optional] [readonly] 
**generated_properties** | **str** | The generated Spring Boot property file for this binding. The secret will be deducted. | [optional] [readonly] 
**key** | **str** | The key of the bound resource | [optional] 
**resource_id** | **str** | The Azure resource id of the bound resource | [optional] 
**resource_name** | **str** | The name of the bound resource | [optional] 
**resource_type** | **str** | The standard Azure resource type of the bound resource | [optional] 
**updated_at** | **str** | Update time of the Binding resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.binding_resource_properties import BindingResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BindingResourceProperties from a JSON string
binding_resource_properties_instance = BindingResourceProperties.from_json(json)
# print the JSON string representation of the object
print(BindingResourceProperties.to_json())

# convert the object into a dict
binding_resource_properties_dict = binding_resource_properties_instance.to_dict()
# create an instance of BindingResourceProperties from a dict
binding_resource_properties_from_dict = BindingResourceProperties.from_dict(binding_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


