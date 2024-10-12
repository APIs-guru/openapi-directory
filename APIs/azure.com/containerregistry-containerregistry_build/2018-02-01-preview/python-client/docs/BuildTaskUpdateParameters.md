# BuildTaskUpdateParameters

The parameters for updating a build task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BuildTaskPropertiesUpdateParameters**](BuildTaskPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | The ARM resource tags. | [optional] 

## Example

```python
from openapi_client.models.build_task_update_parameters import BuildTaskUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTaskUpdateParameters from a JSON string
build_task_update_parameters_instance = BuildTaskUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BuildTaskUpdateParameters.to_json())

# convert the object into a dict
build_task_update_parameters_dict = build_task_update_parameters_instance.to_dict()
# create an instance of BuildTaskUpdateParameters from a dict
build_task_update_parameters_from_dict = BuildTaskUpdateParameters.from_dict(build_task_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


