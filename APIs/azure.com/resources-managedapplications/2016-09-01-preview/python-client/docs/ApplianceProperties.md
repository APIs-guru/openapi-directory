# ApplianceProperties

The appliance properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_definition_id** | **str** | The fully qualified path of appliance definition Id. | [optional] 
**managed_resource_group_id** | **str** | The managed resource group Id. | 
**outputs** | **object** | Name and value pairs that define the appliance outputs. | [optional] [readonly] 
**parameters** | **object** | Name and value pairs that define the appliance parameters. It can be a JObject or a well formed JSON string. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**ui_definition_uri** | **str** | The blob URI where the UI definition file is located. | [optional] 

## Example

```python
from openapi_client.models.appliance_properties import ApplianceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceProperties from a JSON string
appliance_properties_instance = ApplianceProperties.from_json(json)
# print the JSON string representation of the object
print(ApplianceProperties.to_json())

# convert the object into a dict
appliance_properties_dict = appliance_properties_instance.to_dict()
# create an instance of ApplianceProperties from a dict
appliance_properties_from_dict = ApplianceProperties.from_dict(appliance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


