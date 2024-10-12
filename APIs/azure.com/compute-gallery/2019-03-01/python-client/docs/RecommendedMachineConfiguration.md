# RecommendedMachineConfiguration

The properties describe the recommended machine configuration for this Image Definition. These properties are updatable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memory** | [**ResourceRange**](ResourceRange.md) |  | [optional] 
**v_cpus** | [**ResourceRange**](ResourceRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.recommended_machine_configuration import RecommendedMachineConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedMachineConfiguration from a JSON string
recommended_machine_configuration_instance = RecommendedMachineConfiguration.from_json(json)
# print the JSON string representation of the object
print(RecommendedMachineConfiguration.to_json())

# convert the object into a dict
recommended_machine_configuration_dict = recommended_machine_configuration_instance.to_dict()
# create an instance of RecommendedMachineConfiguration from a dict
recommended_machine_configuration_from_dict = RecommendedMachineConfiguration.from_dict(recommended_machine_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


