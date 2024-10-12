# ClientForbiddenProblem

A problem that indicates your client is forbidden from making this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** |  | [optional] 
**registration_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.client_forbidden_problem import ClientForbiddenProblem

# TODO update the JSON string below
json = "{}"
# create an instance of ClientForbiddenProblem from a JSON string
client_forbidden_problem_instance = ClientForbiddenProblem.from_json(json)
# print the JSON string representation of the object
print(ClientForbiddenProblem.to_json())

# convert the object into a dict
client_forbidden_problem_dict = client_forbidden_problem_instance.to_dict()
# create an instance of ClientForbiddenProblem from a dict
client_forbidden_problem_from_dict = ClientForbiddenProblem.from_dict(client_forbidden_problem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


