# RemoteReplicatorAcknowledgementStatus

Provides details about the remote replicators from the primary replicator's point of view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_stream_acknowledgement_detail** | [**RemoteReplicatorAcknowledgementDetail**](RemoteReplicatorAcknowledgementDetail.md) |  | [optional] 
**replication_stream_acknowledgement_detail** | [**RemoteReplicatorAcknowledgementDetail**](RemoteReplicatorAcknowledgementDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.remote_replicator_acknowledgement_status import RemoteReplicatorAcknowledgementStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteReplicatorAcknowledgementStatus from a JSON string
remote_replicator_acknowledgement_status_instance = RemoteReplicatorAcknowledgementStatus.from_json(json)
# print the JSON string representation of the object
print(RemoteReplicatorAcknowledgementStatus.to_json())

# convert the object into a dict
remote_replicator_acknowledgement_status_dict = remote_replicator_acknowledgement_status_instance.to_dict()
# create an instance of RemoteReplicatorAcknowledgementStatus from a dict
remote_replicator_acknowledgement_status_from_dict = RemoteReplicatorAcknowledgementStatus.from_dict(remote_replicator_acknowledgement_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


