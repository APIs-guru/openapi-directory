# StopRuntimeRequest

Request for stopping a Managed Notebook Runtime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Idempotent request UUID. | [optional] 

## Example

```python
from openapi_client.models.stop_runtime_request import StopRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StopRuntimeRequest from a JSON string
stop_runtime_request_instance = StopRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(StopRuntimeRequest.to_json())

# convert the object into a dict
stop_runtime_request_dict = stop_runtime_request_instance.to_dict()
# create an instance of StopRuntimeRequest from a dict
stop_runtime_request_from_dict = StopRuntimeRequest.from_dict(stop_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


