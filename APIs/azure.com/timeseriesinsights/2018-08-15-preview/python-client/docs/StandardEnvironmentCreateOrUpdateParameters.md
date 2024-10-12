# StandardEnvironmentCreateOrUpdateParameters

Parameters supplied to the Create or Update Environment operation for a standard environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StandardEnvironmentCreationProperties**](StandardEnvironmentCreationProperties.md) |  | 
**kind** | **str** | The kind of the environment. | 
**sku** | [**Sku**](Sku.md) |  | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.standard_environment_create_or_update_parameters import StandardEnvironmentCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StandardEnvironmentCreateOrUpdateParameters from a JSON string
standard_environment_create_or_update_parameters_instance = StandardEnvironmentCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(StandardEnvironmentCreateOrUpdateParameters.to_json())

# convert the object into a dict
standard_environment_create_or_update_parameters_dict = standard_environment_create_or_update_parameters_instance.to_dict()
# create an instance of StandardEnvironmentCreateOrUpdateParameters from a dict
standard_environment_create_or_update_parameters_from_dict = StandardEnvironmentCreateOrUpdateParameters.from_dict(standard_environment_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


