# Sandbox

Sandbox model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sandbox_id** | **str** | Sandbox id | 
**users** | [**List[SandboxUser]**](SandboxUser.md) | List of users | [optional] 

## Example

```python
from openapi_client.models.sandbox import Sandbox

# TODO update the JSON string below
json = "{}"
# create an instance of Sandbox from a JSON string
sandbox_instance = Sandbox.from_json(json)
# print the JSON string representation of the object
print(Sandbox.to_json())

# convert the object into a dict
sandbox_dict = sandbox_instance.to_dict()
# create an instance of Sandbox from a dict
sandbox_from_dict = Sandbox.from_dict(sandbox_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


