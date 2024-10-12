# ConnectionSchedule

if null, then no schedule is set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time_unit** | **str** |  | 
**units** | **int** |  | 

## Example

```python
from openapi_client.models.connection_schedule import ConnectionSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSchedule from a JSON string
connection_schedule_instance = ConnectionSchedule.from_json(json)
# print the JSON string representation of the object
print(ConnectionSchedule.to_json())

# convert the object into a dict
connection_schedule_dict = connection_schedule_instance.to_dict()
# create an instance of ConnectionSchedule from a dict
connection_schedule_from_dict = ConnectionSchedule.from_dict(connection_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


