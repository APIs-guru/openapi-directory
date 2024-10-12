# BuildStep

Build step resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BuildStepProperties**](BuildStepProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_step import BuildStep

# TODO update the JSON string below
json = "{}"
# create an instance of BuildStep from a JSON string
build_step_instance = BuildStep.from_json(json)
# print the JSON string representation of the object
print(BuildStep.to_json())

# convert the object into a dict
build_step_dict = build_step_instance.to_dict()
# create an instance of BuildStep from a dict
build_step_from_dict = BuildStep.from_dict(build_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


