# ExecutionPolicy

The execution policy of the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ExecutionPolicyType**](ExecutionPolicyType.md) |  | 

## Example

```python
from openapi_client.models.execution_policy import ExecutionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ExecutionPolicy from a JSON string
execution_policy_instance = ExecutionPolicy.from_json(json)
# print the JSON string representation of the object
print(ExecutionPolicy.to_json())

# convert the object into a dict
execution_policy_dict = execution_policy_instance.to_dict()
# create an instance of ExecutionPolicy from a dict
execution_policy_from_dict = ExecutionPolicy.from_dict(execution_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


