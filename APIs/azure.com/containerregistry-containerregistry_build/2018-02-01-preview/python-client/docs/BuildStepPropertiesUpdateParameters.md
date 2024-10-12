# BuildStepPropertiesUpdateParameters

The properties for updating a build step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the step. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_step_properties_update_parameters import BuildStepPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BuildStepPropertiesUpdateParameters from a JSON string
build_step_properties_update_parameters_instance = BuildStepPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BuildStepPropertiesUpdateParameters.to_json())

# convert the object into a dict
build_step_properties_update_parameters_dict = build_step_properties_update_parameters_instance.to_dict()
# create an instance of BuildStepPropertiesUpdateParameters from a dict
build_step_properties_update_parameters_from_dict = BuildStepPropertiesUpdateParameters.from_dict(build_step_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


