# PartitionReconfigurationCompletedEvent

Partition Reconfiguration Completed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cc_epoch_config_version** | **int** | CcEpochConfig version. | 
**cc_epoch_data_loss_version** | **int** | CcEpochDataLoss version. | 
**node_instance_id** | **str** | Id of Node instance. | 
**node_name** | **str** | The name of a Service Fabric node. | 
**phase0_duration_ms** | **float** | Duration of Phase0 in milli-seconds. | 
**phase1_duration_ms** | **float** | Duration of Phase1 in milli-seconds. | 
**phase2_duration_ms** | **float** | Duration of Phase2 in milli-seconds. | 
**phase3_duration_ms** | **float** | Duration of Phase3 in milli-seconds. | 
**phase4_duration_ms** | **float** | Duration of Phase4 in milli-seconds. | 
**reconfig_type** | **str** | Type of reconfiguration. | 
**result** | **str** | Describes reconfiguration result. | 
**service_type** | **str** | Type of Service. | 
**total_duration_ms** | **float** | Total duration in milli-seconds. | 

## Example

```python
from openapi_client.models.partition_reconfiguration_completed_event import PartitionReconfigurationCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionReconfigurationCompletedEvent from a JSON string
partition_reconfiguration_completed_event_instance = PartitionReconfigurationCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(PartitionReconfigurationCompletedEvent.to_json())

# convert the object into a dict
partition_reconfiguration_completed_event_dict = partition_reconfiguration_completed_event_instance.to_dict()
# create an instance of PartitionReconfigurationCompletedEvent from a dict
partition_reconfiguration_completed_event_from_dict = PartitionReconfigurationCompletedEvent.from_dict(partition_reconfiguration_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


