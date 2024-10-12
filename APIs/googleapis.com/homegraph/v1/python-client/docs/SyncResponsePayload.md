# SyncResponsePayload

Payload containing device information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_user_id** | **str** | Third-party user ID | [optional] 
**devices** | [**List[Device]**](Device.md) | Devices associated with the third-party user. | [optional] 

## Example

```python
from openapi_client.models.sync_response_payload import SyncResponsePayload

# TODO update the JSON string below
json = "{}"
# create an instance of SyncResponsePayload from a JSON string
sync_response_payload_instance = SyncResponsePayload.from_json(json)
# print the JSON string representation of the object
print(SyncResponsePayload.to_json())

# convert the object into a dict
sync_response_payload_dict = sync_response_payload_instance.to_dict()
# create an instance of SyncResponsePayload from a dict
sync_response_payload_from_dict = SyncResponsePayload.from_dict(sync_response_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


