# ConnectionExceptionProblem

A problem that indicates something is wrong with the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_issue** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.connection_exception_problem import ConnectionExceptionProblem

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionExceptionProblem from a JSON string
connection_exception_problem_instance = ConnectionExceptionProblem.from_json(json)
# print the JSON string representation of the object
print(ConnectionExceptionProblem.to_json())

# convert the object into a dict
connection_exception_problem_dict = connection_exception_problem_instance.to_dict()
# create an instance of ConnectionExceptionProblem from a dict
connection_exception_problem_from_dict = ConnectionExceptionProblem.from_dict(connection_exception_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


