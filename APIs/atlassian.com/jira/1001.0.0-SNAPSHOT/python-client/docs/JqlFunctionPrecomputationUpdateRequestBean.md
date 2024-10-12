# JqlFunctionPrecomputationUpdateRequestBean

List of pairs (id and value) for precomputation updates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[JqlFunctionPrecomputationUpdateBean]**](JqlFunctionPrecomputationUpdateBean.md) |  | [optional] 

## Example

```python
from openapi_client.models.jql_function_precomputation_update_request_bean import JqlFunctionPrecomputationUpdateRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of JqlFunctionPrecomputationUpdateRequestBean from a JSON string
jql_function_precomputation_update_request_bean_instance = JqlFunctionPrecomputationUpdateRequestBean.from_json(json)
# print the JSON string representation of the object
print(JqlFunctionPrecomputationUpdateRequestBean.to_json())

# convert the object into a dict
jql_function_precomputation_update_request_bean_dict = jql_function_precomputation_update_request_bean_instance.to_dict()
# create an instance of JqlFunctionPrecomputationUpdateRequestBean from a dict
jql_function_precomputation_update_request_bean_from_dict = JqlFunctionPrecomputationUpdateRequestBean.from_dict(jql_function_precomputation_update_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


