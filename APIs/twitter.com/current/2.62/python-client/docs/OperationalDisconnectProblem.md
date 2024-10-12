# OperationalDisconnectProblem

You have been disconnected for operational reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disconnect_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.operational_disconnect_problem import OperationalDisconnectProblem

# TODO update the JSON string below
json = "{}"
# create an instance of OperationalDisconnectProblem from a JSON string
operational_disconnect_problem_instance = OperationalDisconnectProblem.from_json(json)
# print the JSON string representation of the object
print(OperationalDisconnectProblem.to_json())

# convert the object into a dict
operational_disconnect_problem_dict = operational_disconnect_problem_instance.to_dict()
# create an instance of OperationalDisconnectProblem from a dict
operational_disconnect_problem_from_dict = OperationalDisconnectProblem.from_dict(operational_disconnect_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


