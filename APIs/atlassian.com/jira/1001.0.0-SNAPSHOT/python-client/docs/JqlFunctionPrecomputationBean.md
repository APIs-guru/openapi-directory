# JqlFunctionPrecomputationBean

Jql function precomputation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **List[str]** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**var_field** | **str** |  | [optional] [readonly] 
**function_key** | **str** |  | [optional] [readonly] 
**function_name** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**operator** | **str** |  | [optional] [readonly] 
**updated** | **datetime** |  | [optional] [readonly] 
**used** | **datetime** |  | [optional] [readonly] 
**value** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.jql_function_precomputation_bean import JqlFunctionPrecomputationBean

# TODO update the JSON string below
json = "{}"
# create an instance of JqlFunctionPrecomputationBean from a JSON string
jql_function_precomputation_bean_instance = JqlFunctionPrecomputationBean.from_json(json)
# print the JSON string representation of the object
print(JqlFunctionPrecomputationBean.to_json())

# convert the object into a dict
jql_function_precomputation_bean_dict = jql_function_precomputation_bean_instance.to_dict()
# create an instance of JqlFunctionPrecomputationBean from a dict
jql_function_precomputation_bean_from_dict = JqlFunctionPrecomputationBean.from_dict(jql_function_precomputation_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


