# StandardEnvironmentUpdateParameters

Parameters supplied to the Update Environment operation to update a standard environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StandardEnvironmentMutableProperties**](StandardEnvironmentMutableProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the environment. | [optional] 

## Example

```python
from openapi_client.models.standard_environment_update_parameters import StandardEnvironmentUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StandardEnvironmentUpdateParameters from a JSON string
standard_environment_update_parameters_instance = StandardEnvironmentUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(StandardEnvironmentUpdateParameters.to_json())

# convert the object into a dict
standard_environment_update_parameters_dict = standard_environment_update_parameters_instance.to_dict()
# create an instance of StandardEnvironmentUpdateParameters from a dict
standard_environment_update_parameters_from_dict = StandardEnvironmentUpdateParameters.from_dict(standard_environment_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


