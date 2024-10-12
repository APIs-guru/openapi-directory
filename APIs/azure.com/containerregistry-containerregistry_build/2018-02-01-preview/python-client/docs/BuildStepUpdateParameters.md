# BuildStepUpdateParameters

The parameters for updating a build step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BuildStepPropertiesUpdateParameters**](BuildStepPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The ARM resource tags. | [optional] 

## Example

```python
from openapi_client.models.build_step_update_parameters import BuildStepUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BuildStepUpdateParameters from a JSON string
build_step_update_parameters_instance = BuildStepUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BuildStepUpdateParameters.to_json())

# convert the object into a dict
build_step_update_parameters_dict = build_step_update_parameters_instance.to_dict()
# create an instance of BuildStepUpdateParameters from a dict
build_step_update_parameters_from_dict = BuildStepUpdateParameters.from_dict(build_step_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


