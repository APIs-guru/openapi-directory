# PubsubSnapshotMetadata

Represents a Pubsub snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The expire time of the Pubsub snapshot. | [optional] 
**snapshot_name** | **str** | The name of the Pubsub snapshot. | [optional] 
**topic_name** | **str** | The name of the Pubsub topic. | [optional] 

## Example

```python
from openapi_client.models.pubsub_snapshot_metadata import PubsubSnapshotMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubSnapshotMetadata from a JSON string
pubsub_snapshot_metadata_instance = PubsubSnapshotMetadata.from_json(json)
# print the JSON string representation of the object
print(PubsubSnapshotMetadata.to_json())

# convert the object into a dict
pubsub_snapshot_metadata_dict = pubsub_snapshot_metadata_instance.to_dict()
# create an instance of PubsubSnapshotMetadata from a dict
pubsub_snapshot_metadata_from_dict = PubsubSnapshotMetadata.from_dict(pubsub_snapshot_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


