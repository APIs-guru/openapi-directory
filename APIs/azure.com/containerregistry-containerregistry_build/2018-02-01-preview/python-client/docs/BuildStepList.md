# BuildStepList

The collection of build items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[BuildStep]**](BuildStep.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.build_step_list import BuildStepList

# TODO update the JSON string below
json = "{}"
# create an instance of BuildStepList from a JSON string
build_step_list_instance = BuildStepList.from_json(json)
# print the JSON string representation of the object
print(BuildStepList.to_json())

# convert the object into a dict
build_step_list_dict = build_step_list_instance.to_dict()
# create an instance of BuildStepList from a dict
build_step_list_from_dict = BuildStepList.from_dict(build_step_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


