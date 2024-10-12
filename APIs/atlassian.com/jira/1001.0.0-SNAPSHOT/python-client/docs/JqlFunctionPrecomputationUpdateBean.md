# JqlFunctionPrecomputationUpdateBean

Precomputation id and its new value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.jql_function_precomputation_update_bean import JqlFunctionPrecomputationUpdateBean

# TODO update the JSON string below
json = "{}"
# create an instance of JqlFunctionPrecomputationUpdateBean from a JSON string
jql_function_precomputation_update_bean_instance = JqlFunctionPrecomputationUpdateBean.from_json(json)
# print the JSON string representation of the object
print(JqlFunctionPrecomputationUpdateBean.to_json())

# convert the object into a dict
jql_function_precomputation_update_bean_dict = jql_function_precomputation_update_bean_instance.to_dict()
# create an instance of JqlFunctionPrecomputationUpdateBean from a dict
jql_function_precomputation_update_bean_from_dict = JqlFunctionPrecomputationUpdateBean.from_dict(jql_function_precomputation_update_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


