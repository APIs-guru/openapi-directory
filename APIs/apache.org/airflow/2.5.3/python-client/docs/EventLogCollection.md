# EventLogCollection

Collection of event logs.  *Changed in version 2.1.0*&#58; 'total_entries' field is added. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**event_logs** | [**List[EventLog]**](EventLog.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_log_collection import EventLogCollection

# TODO update the JSON string below
json = "{}"
# create an instance of EventLogCollection from a JSON string
event_log_collection_instance = EventLogCollection.from_json(json)
# print the JSON string representation of the object
print(EventLogCollection.to_json())

# convert the object into a dict
event_log_collection_dict = event_log_collection_instance.to_dict()
# create an instance of EventLogCollection from a dict
event_log_collection_from_dict = EventLogCollection.from_dict(event_log_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


