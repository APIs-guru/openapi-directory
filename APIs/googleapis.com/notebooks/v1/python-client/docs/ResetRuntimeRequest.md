# ResetRuntimeRequest

Request for resetting a Managed Notebook Runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Idempotent request UUID. | [optional] 

## Example

```python
from openapi_client.models.reset_runtime_request import ResetRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResetRuntimeRequest from a JSON string
reset_runtime_request_instance = ResetRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(ResetRuntimeRequest.to_json())

# convert the object into a dict
reset_runtime_request_dict = reset_runtime_request_instance.to_dict()
# create an instance of ResetRuntimeRequest from a dict
reset_runtime_request_from_dict = ResetRuntimeRequest.from_dict(reset_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


