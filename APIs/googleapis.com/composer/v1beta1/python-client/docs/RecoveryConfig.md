# RecoveryConfig

The Recovery settings of an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_snapshots_config** | [**ScheduledSnapshotsConfig**](ScheduledSnapshotsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.recovery_config import RecoveryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryConfig from a JSON string
recovery_config_instance = RecoveryConfig.from_json(json)
# print the JSON string representation of the object
print(RecoveryConfig.to_json())

# convert the object into a dict
recovery_config_dict = recovery_config_instance.to_dict()
# create an instance of RecoveryConfig from a dict
recovery_config_from_dict = RecoveryConfig.from_dict(recovery_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


