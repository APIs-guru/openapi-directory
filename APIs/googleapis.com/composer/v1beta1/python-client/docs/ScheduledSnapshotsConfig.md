# ScheduledSnapshotsConfig

The configuration for scheduled snapshot creation mechanism.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Optional. Whether scheduled snapshots creation is enabled. | [optional] 
**snapshot_creation_schedule** | **str** | Optional. The cron expression representing the time when snapshots creation mechanism runs. This field is subject to additional validation around frequency of execution. | [optional] 
**snapshot_location** | **str** | Optional. The Cloud Storage location for storing automatically created snapshots. | [optional] 
**time_zone** | **str** | Optional. Time zone that sets the context to interpret snapshot_creation_schedule. | [optional] 

## Example

```python
from openapi_client.models.scheduled_snapshots_config import ScheduledSnapshotsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledSnapshotsConfig from a JSON string
scheduled_snapshots_config_instance = ScheduledSnapshotsConfig.from_json(json)
# print the JSON string representation of the object
print(ScheduledSnapshotsConfig.to_json())

# convert the object into a dict
scheduled_snapshots_config_dict = scheduled_snapshots_config_instance.to_dict()
# create an instance of ScheduledSnapshotsConfig from a dict
scheduled_snapshots_config_from_dict = ScheduledSnapshotsConfig.from_dict(scheduled_snapshots_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


