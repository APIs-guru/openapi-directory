# ApplicationProperties

The managed application properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_definition_id** | **str** | The fully qualified path of managed application definition Id. | [optional] 
**managed_resource_group_id** | **str** | The managed resource group Id. | 
**outputs** | **object** | Name and value pairs that define the managed application outputs. | [optional] [readonly] 
**parameters** | **object** | Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_properties import ApplicationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationProperties from a JSON string
application_properties_instance = ApplicationProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationProperties.to_json())

# convert the object into a dict
application_properties_dict = application_properties_instance.to_dict()
# create an instance of ApplicationProperties from a dict
application_properties_from_dict = ApplicationProperties.from_dict(application_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


