# SandboxParty

Connected party information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Party id | [optional] 
**name** | **str** | Name | [optional] 

## Example

```python
from openapi_client.models.sandbox_party import SandboxParty

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxParty from a JSON string
sandbox_party_instance = SandboxParty.from_json(json)
# print the JSON string representation of the object
print(SandboxParty.to_json())

# convert the object into a dict
sandbox_party_dict = sandbox_party_instance.to_dict()
# create an instance of SandboxParty from a dict
sandbox_party_from_dict = SandboxParty.from_dict(sandbox_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


