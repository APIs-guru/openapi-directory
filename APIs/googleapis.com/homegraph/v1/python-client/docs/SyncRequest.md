# SyncRequest

Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_user_id** | **str** | Required. Third-party user ID. | [optional] 
**request_id** | **str** | Request ID used for debugging. | [optional] 

## Example

```python
from openapi_client.models.sync_request import SyncRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SyncRequest from a JSON string
sync_request_instance = SyncRequest.from_json(json)
# print the JSON string representation of the object
print(SyncRequest.to_json())

# convert the object into a dict
sync_request_dict = sync_request_instance.to_dict()
# create an instance of SyncRequest from a dict
sync_request_from_dict = SyncRequest.from_dict(sync_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


