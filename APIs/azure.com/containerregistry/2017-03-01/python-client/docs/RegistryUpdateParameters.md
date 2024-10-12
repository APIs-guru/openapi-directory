# RegistryUpdateParameters

The parameters for updating a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RegistryPropertiesUpdateParameters**](RegistryPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags for the container registry. | [optional] 

## Example

```python
from openapi_client.models.registry_update_parameters import RegistryUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryUpdateParameters from a JSON string
registry_update_parameters_instance = RegistryUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RegistryUpdateParameters.to_json())

# convert the object into a dict
registry_update_parameters_dict = registry_update_parameters_instance.to_dict()
# create an instance of RegistryUpdateParameters from a dict
registry_update_parameters_from_dict = RegistryUpdateParameters.from_dict(registry_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


