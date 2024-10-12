# EventsQuery

Specific filters understood and executed for this query. If your parameter is not visible here, then consult the documentation for correct usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity** | **List[str]** | required activity types | [optional] 
**category** | **List[str]** | required categories | [optional] 
**limit** | **int** | maximum number of matches to return | [optional] 

## Example

```python
from openapi_client.models.events_query import EventsQuery

# TODO update the JSON string below
json = "{}"
# create an instance of EventsQuery from a JSON string
events_query_instance = EventsQuery.from_json(json)
# print the JSON string representation of the object
print(EventsQuery.to_json())

# convert the object into a dict
events_query_dict = events_query_instance.to_dict()
# create an instance of EventsQuery from a dict
events_query_from_dict = EventsQuery.from_dict(events_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


