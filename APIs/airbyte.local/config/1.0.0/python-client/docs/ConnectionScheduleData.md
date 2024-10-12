# ConnectionScheduleData

schedule for when the the connection should run, per the schedule type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_schedule** | [**ConnectionScheduleDataBasicSchedule**](ConnectionScheduleDataBasicSchedule.md) |  | [optional] 
**cron** | [**ConnectionScheduleDataCron**](ConnectionScheduleDataCron.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_schedule_data import ConnectionScheduleData

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionScheduleData from a JSON string
connection_schedule_data_instance = ConnectionScheduleData.from_json(json)
# print the JSON string representation of the object
print(ConnectionScheduleData.to_json())

# convert the object into a dict
connection_schedule_data_dict = connection_schedule_data_instance.to_dict()
# create an instance of ConnectionScheduleData from a dict
connection_schedule_data_from_dict = ConnectionScheduleData.from_dict(connection_schedule_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


