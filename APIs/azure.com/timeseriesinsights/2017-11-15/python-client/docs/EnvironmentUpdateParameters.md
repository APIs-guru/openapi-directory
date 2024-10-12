# EnvironmentUpdateParameters

Parameters supplied to the Update Environment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EnvironmentMutableProperties**](EnvironmentMutableProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the environment. | [optional] 

## Example

```python
from openapi_client.models.environment_update_parameters import EnvironmentUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentUpdateParameters from a JSON string
environment_update_parameters_instance = EnvironmentUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EnvironmentUpdateParameters.to_json())

# convert the object into a dict
environment_update_parameters_dict = environment_update_parameters_instance.to_dict()
# create an instance of EnvironmentUpdateParameters from a dict
environment_update_parameters_from_dict = EnvironmentUpdateParameters.from_dict(environment_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


