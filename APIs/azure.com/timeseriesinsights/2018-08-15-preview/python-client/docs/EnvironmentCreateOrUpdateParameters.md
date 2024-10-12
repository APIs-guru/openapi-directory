# EnvironmentCreateOrUpdateParameters

Parameters supplied to the CreateOrUpdate Environment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the environment. | 
**sku** | [**Sku**](Sku.md) |  | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.environment_create_or_update_parameters import EnvironmentCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentCreateOrUpdateParameters from a JSON string
environment_create_or_update_parameters_instance = EnvironmentCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EnvironmentCreateOrUpdateParameters.to_json())

# convert the object into a dict
environment_create_or_update_parameters_dict = environment_create_or_update_parameters_instance.to_dict()
# create an instance of EnvironmentCreateOrUpdateParameters from a dict
environment_create_or_update_parameters_from_dict = EnvironmentCreateOrUpdateParameters.from_dict(environment_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


