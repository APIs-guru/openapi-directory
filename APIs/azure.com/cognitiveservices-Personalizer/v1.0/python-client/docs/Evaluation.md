# Evaluation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** |  | [optional] [readonly] 
**feature_importance** | **List[List[str]]** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**job_id** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**policy_results** | [**List[PolicyResult]**](PolicyResult.md) |  | [optional] 
**start_time** | **datetime** |  | [optional] [readonly] 
**status** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.evaluation import Evaluation

# TODO update the JSON string below
json = "{}"
# create an instance of Evaluation from a JSON string
evaluation_instance = Evaluation.from_json(json)
# print the JSON string representation of the object
print(Evaluation.to_json())

# convert the object into a dict
evaluation_dict = evaluation_instance.to_dict()
# create an instance of Evaluation from a dict
evaluation_from_dict = Evaluation.from_dict(evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


