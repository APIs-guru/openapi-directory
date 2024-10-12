# EvaluationContract

A counterfactual evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_offline_experimentation** | **bool** | True if the evaluation should explore for a more optimal Learning settings. | [optional] 
**end_time** | **datetime** | The end time of the evaluation. | 
**name** | **str** | The name of the evaluation. | 
**policies** | [**List[PolicyContract]**](PolicyContract.md) | Additional Learning settings to evaluate. | 
**start_time** | **datetime** | The start time of the evaluation. | 

## Example

```python
from openapi_client.models.evaluation_contract import EvaluationContract

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluationContract from a JSON string
evaluation_contract_instance = EvaluationContract.from_json(json)
# print the JSON string representation of the object
print(EvaluationContract.to_json())

# convert the object into a dict
evaluation_contract_dict = evaluation_contract_instance.to_dict()
# create an instance of EvaluationContract from a dict
evaluation_contract_from_dict = EvaluationContract.from_dict(evaluation_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


