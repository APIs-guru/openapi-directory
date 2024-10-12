# LongTermEnvironmentCreateOrUpdateParameters

Parameters supplied to the Create or Update Environment operation for a long-term environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LongTermEnvironmentCreationProperties**](LongTermEnvironmentCreationProperties.md) |  | 
**kind** | **str** | The kind of the environment. | 
**sku** | [**Sku**](Sku.md) |  | 
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.long_term_environment_create_or_update_parameters import LongTermEnvironmentCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermEnvironmentCreateOrUpdateParameters from a JSON string
long_term_environment_create_or_update_parameters_instance = LongTermEnvironmentCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(LongTermEnvironmentCreateOrUpdateParameters.to_json())

# convert the object into a dict
long_term_environment_create_or_update_parameters_dict = long_term_environment_create_or_update_parameters_instance.to_dict()
# create an instance of LongTermEnvironmentCreateOrUpdateParameters from a dict
long_term_environment_create_or_update_parameters_from_dict = LongTermEnvironmentCreateOrUpdateParameters.from_dict(long_term_environment_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


