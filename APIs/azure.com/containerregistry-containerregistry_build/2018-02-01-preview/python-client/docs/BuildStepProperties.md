# BuildStepProperties

Base properties for any build step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the build step. | [optional] [readonly] 
**type** | **str** | The type of the step. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_step_properties import BuildStepProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BuildStepProperties from a JSON string
build_step_properties_instance = BuildStepProperties.from_json(json)
# print the JSON string representation of the object
print(BuildStepProperties.to_json())

# convert the object into a dict
build_step_properties_dict = build_step_properties_instance.to_dict()
# create an instance of BuildStepProperties from a dict
build_step_properties_from_dict = BuildStepProperties.from_dict(build_step_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


