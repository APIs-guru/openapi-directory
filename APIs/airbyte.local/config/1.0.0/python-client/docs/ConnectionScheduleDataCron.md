# ConnectionScheduleDataCron


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron_expression** | **str** |  | 
**cron_time_zone** | **str** |  | 

## Example

```python
from openapi_client.models.connection_schedule_data_cron import ConnectionScheduleDataCron

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionScheduleDataCron from a JSON string
connection_schedule_data_cron_instance = ConnectionScheduleDataCron.from_json(json)
# print the JSON string representation of the object
print(ConnectionScheduleDataCron.to_json())

# convert the object into a dict
connection_schedule_data_cron_dict = connection_schedule_data_cron_instance.to_dict()
# create an instance of ConnectionScheduleDataCron from a dict
connection_schedule_data_cron_from_dict = ConnectionScheduleDataCron.from_dict(connection_schedule_data_cron_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


