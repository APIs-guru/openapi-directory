# PersistenceConfig

Configuration of the persistence functionality.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persistence_mode** | **str** | Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used. | [optional] 
**rdb_next_snapshot_time** | **str** | Output only. The next time that a snapshot attempt is scheduled to occur. | [optional] [readonly] 
**rdb_snapshot_period** | **str** | Optional. Period between RDB snapshots. Snapshots will be attempted every period starting from the provided snapshot start time. For example, a start time of 01/01/2033 06:45 and SIX_HOURS snapshot period will do nothing until 01/01/2033, and then trigger snapshots every day at 06:45, 12:45, 18:45, and 00:45 the next day, and so on. If not provided, TWENTY_FOUR_HOURS will be used as default. | [optional] 
**rdb_snapshot_start_time** | **str** | Optional. Date and time that the first snapshot was/will be attempted, and to which future snapshots will be aligned. If not provided, the current time will be used. | [optional] 

## Example

```python
from openapi_client.models.persistence_config import PersistenceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PersistenceConfig from a JSON string
persistence_config_instance = PersistenceConfig.from_json(json)
# print the JSON string representation of the object
print(PersistenceConfig.to_json())

# convert the object into a dict
persistence_config_dict = persistence_config_instance.to_dict()
# create an instance of PersistenceConfig from a dict
persistence_config_from_dict = PersistenceConfig.from_dict(persistence_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


