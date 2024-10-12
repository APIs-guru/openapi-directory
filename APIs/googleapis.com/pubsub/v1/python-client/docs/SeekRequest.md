# SeekRequest

Request for the `Seek` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot** | **str** | Optional. The snapshot to seek to. The snapshot&#39;s topic must be the same as that of the provided subscription. Format is &#x60;projects/{project}/snapshots/{snap}&#x60;. | [optional] 
**time** | **str** | Optional. The time to seek to. Messages retained in the subscription that were published before this time are marked as acknowledged, and messages retained in the subscription that were published after this time are marked as unacknowledged. Note that this operation affects only those messages retained in the subscription (configured by the combination of &#x60;message_retention_duration&#x60; and &#x60;retain_acked_messages&#x60;). For example, if &#x60;time&#x60; corresponds to a point before the message retention window (or to a point before the system&#39;s notion of the subscription creation time), only retained messages will be marked as unacknowledged, and already-expunged messages will not be restored. | [optional] 

## Example

```python
from openapi_client.models.seek_request import SeekRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SeekRequest from a JSON string
seek_request_instance = SeekRequest.from_json(json)
# print the JSON string representation of the object
print(SeekRequest.to_json())

# convert the object into a dict
seek_request_dict = seek_request_instance.to_dict()
# create an instance of SeekRequest from a dict
seek_request_from_dict = SeekRequest.from_dict(seek_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


