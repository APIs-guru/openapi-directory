# StreamingApplianceSnapshotConfig

Streaming appliance snapshot configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**import_state_endpoint** | **str** | Indicates which endpoint is used to import appliance state. | [optional] 
**snapshot_id** | **str** | If set, indicates the snapshot id for the snapshot being performed. | [optional] 

## Example

```python
from openapi_client.models.streaming_appliance_snapshot_config import StreamingApplianceSnapshotConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingApplianceSnapshotConfig from a JSON string
streaming_appliance_snapshot_config_instance = StreamingApplianceSnapshotConfig.from_json(json)
# print the JSON string representation of the object
print(StreamingApplianceSnapshotConfig.to_json())

# convert the object into a dict
streaming_appliance_snapshot_config_dict = streaming_appliance_snapshot_config_instance.to_dict()
# create an instance of StreamingApplianceSnapshotConfig from a dict
streaming_appliance_snapshot_config_from_dict = StreamingApplianceSnapshotConfig.from_dict(streaming_appliance_snapshot_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


