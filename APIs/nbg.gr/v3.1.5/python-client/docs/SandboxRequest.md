# SandboxRequest

Request to create a new sandbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sandbox_id** | **str** | Sandbox Id | 

## Example

```python
from openapi_client.models.sandbox_request import SandboxRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxRequest from a JSON string
sandbox_request_instance = SandboxRequest.from_json(json)
# print the JSON string representation of the object
print(SandboxRequest.to_json())

# convert the object into a dict
sandbox_request_dict = sandbox_request_instance.to_dict()
# create an instance of SandboxRequest from a dict
sandbox_request_from_dict = SandboxRequest.from_dict(sandbox_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


