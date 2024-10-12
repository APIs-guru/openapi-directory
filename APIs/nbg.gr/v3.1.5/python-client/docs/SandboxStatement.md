# SandboxStatement

Statement information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**month** | **int** | Statement month | [optional] 
**number** | **str** | Statement number | [optional] 
**year** | **int** | Statement year | [optional] 

## Example

```python
from openapi_client.models.sandbox_statement import SandboxStatement

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxStatement from a JSON string
sandbox_statement_instance = SandboxStatement.from_json(json)
# print the JSON string representation of the object
print(SandboxStatement.to_json())

# convert the object into a dict
sandbox_statement_dict = sandbox_statement_instance.to_dict()
# create an instance of SandboxStatement from a dict
sandbox_statement_from_dict = SandboxStatement.from_dict(sandbox_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


