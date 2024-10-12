# RemoteReplicatorAcknowledgementDetail

Provides various statistics of the acknowledgements that are being received from the remote replicator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_apply_duration** | **str** | Represents the average duration it takes for the remote replicator to apply an operation. This usually entails writing the operation to disk. | [optional] 
**average_receive_duration** | **str** | Represents the average duration it takes for the remote replicator to receive an operation. | [optional] 
**not_received_count** | **str** | Represents the number of operations not yet received by a remote replicator. | [optional] 
**received_and_not_applied_count** | **str** | Represents the number of operations received and not yet applied by a remote replicator. | [optional] 

## Example

```python
from openapi_client.models.remote_replicator_acknowledgement_detail import RemoteReplicatorAcknowledgementDetail

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteReplicatorAcknowledgementDetail from a JSON string
remote_replicator_acknowledgement_detail_instance = RemoteReplicatorAcknowledgementDetail.from_json(json)
# print the JSON string representation of the object
print(RemoteReplicatorAcknowledgementDetail.to_json())

# convert the object into a dict
remote_replicator_acknowledgement_detail_dict = remote_replicator_acknowledgement_detail_instance.to_dict()
# create an instance of RemoteReplicatorAcknowledgementDetail from a dict
remote_replicator_acknowledgement_detail_from_dict = RemoteReplicatorAcknowledgementDetail.from_dict(remote_replicator_acknowledgement_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


