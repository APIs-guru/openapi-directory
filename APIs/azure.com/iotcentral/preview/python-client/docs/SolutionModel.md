# SolutionModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 
**cloud_properties** | [**List[Capability]**](Capability.md) | The cloud properties defined by the solution model. | [optional] 
**initial_values** | [**List[InitialValue]**](InitialValue.md) | The initial values defined by the solution model. | [optional] 
**overrides** | [**List[Override]**](Override.md) | The overrides defined by the solution model. | [optional] 

## Example

```python
from openapi_client.models.solution_model import SolutionModel

# TODO update the JSON string below
json = "{}"
# create an instance of SolutionModel from a JSON string
solution_model_instance = SolutionModel.from_json(json)
# print the JSON string representation of the object
print(SolutionModel.to_json())

# convert the object into a dict
solution_model_dict = solution_model_instance.to_dict()
# create an instance of SolutionModel from a dict
solution_model_from_dict = SolutionModel.from_dict(solution_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


