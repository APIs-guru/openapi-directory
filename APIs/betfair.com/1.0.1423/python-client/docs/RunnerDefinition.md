# RunnerDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment_factor** | **float** |  | [optional] 
**bsp** | **float** |  | [optional] 
**hc** | **float** | Handicap - the handicap of the runner (selection) (null if not applicable) | [optional] 
**id** | **int** | Selection Id - the id of the runner (selection) | [optional] 
**removal_date** | **datetime** |  | [optional] 
**sort_priority** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.runner_definition import RunnerDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RunnerDefinition from a JSON string
runner_definition_instance = RunnerDefinition.from_json(json)
# print the JSON string representation of the object
print(RunnerDefinition.to_json())

# convert the object into a dict
runner_definition_dict = runner_definition_instance.to_dict()
# create an instance of RunnerDefinition from a dict
runner_definition_from_dict = RunnerDefinition.from_dict(runner_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


