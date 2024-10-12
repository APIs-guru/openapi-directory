# RequestSyncDevicesRequest

Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_user_id** | **str** | Required. Third-party user ID. | [optional] 
**var_async** | **bool** | Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given &#x60;agent_user_id&#x60;, but the caller will not receive any error responses. | [optional] 

## Example

```python
from openapi_client.models.request_sync_devices_request import RequestSyncDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequestSyncDevicesRequest from a JSON string
request_sync_devices_request_instance = RequestSyncDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(RequestSyncDevicesRequest.to_json())

# convert the object into a dict
request_sync_devices_request_dict = request_sync_devices_request_instance.to_dict()
# create an instance of RequestSyncDevicesRequest from a dict
request_sync_devices_request_from_dict = RequestSyncDevicesRequest.from_dict(request_sync_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


