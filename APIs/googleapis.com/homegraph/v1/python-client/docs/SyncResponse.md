# SyncResponse

Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.home.google.com/cloud-to-cloud/intents/sync). Example: ```json { \"requestId\": \"ff36a3cc-ec34-11e6-b1a0-64510650abcf\", \"payload\": { \"agentUserId\": \"1836.15267389\", \"devices\": [{ \"id\": \"123\", \"type\": \"action.devices.types.OUTLET\", \"traits\": [ \"action.devices.traits.OnOff\" ], \"name\": { \"defaultNames\": [\"My Outlet 1234\"], \"name\": \"Night light\", \"nicknames\": [\"wall plug\"] }, \"willReportState\": false, \"deviceInfo\": { \"manufacturer\": \"lights-out-inc\", \"model\": \"hs1234\", \"hwVersion\": \"3.2\", \"swVersion\": \"11.4\" }, \"customData\": { \"fooValue\": 74, \"barValue\": true, \"bazValue\": \"foo\" } }] } } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | [**SyncResponsePayload**](SyncResponsePayload.md) |  | [optional] 
**request_id** | **str** | Request ID used for debugging. Copied from the request. | [optional] 

## Example

```python
from openapi_client.models.sync_response import SyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SyncResponse from a JSON string
sync_response_instance = SyncResponse.from_json(json)
# print the JSON string representation of the object
print(SyncResponse.to_json())

# convert the object into a dict
sync_response_dict = sync_response_instance.to_dict()
# create an instance of SyncResponse from a dict
sync_response_from_dict = SyncResponse.from_dict(sync_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


