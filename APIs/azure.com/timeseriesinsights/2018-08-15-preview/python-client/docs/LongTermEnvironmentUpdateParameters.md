# LongTermEnvironmentUpdateParameters

Parameters supplied to the Update Environment operation to update a long-term environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LongTermEnvironmentMutableProperties**](LongTermEnvironmentMutableProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the environment. | [optional] 

## Example

```python
from openapi_client.models.long_term_environment_update_parameters import LongTermEnvironmentUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermEnvironmentUpdateParameters from a JSON string
long_term_environment_update_parameters_instance = LongTermEnvironmentUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(LongTermEnvironmentUpdateParameters.to_json())

# convert the object into a dict
long_term_environment_update_parameters_dict = long_term_environment_update_parameters_instance.to_dict()
# create an instance of LongTermEnvironmentUpdateParameters from a dict
long_term_environment_update_parameters_from_dict = LongTermEnvironmentUpdateParameters.from_dict(long_term_environment_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


