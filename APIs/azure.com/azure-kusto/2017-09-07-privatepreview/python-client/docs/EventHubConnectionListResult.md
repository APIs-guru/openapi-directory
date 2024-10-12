# EventHubConnectionListResult

The list Kusto event hub connections operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[EventHubConnection]**](EventHubConnection.md) | The list of Kusto event hub connections. | [optional] 

## Example

```python
from openapi_client.models.event_hub_connection_list_result import EventHubConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConnectionListResult from a JSON string
event_hub_connection_list_result_instance = EventHubConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(EventHubConnectionListResult.to_json())

# convert the object into a dict
event_hub_connection_list_result_dict = event_hub_connection_list_result_instance.to_dict()
# create an instance of EventHubConnectionListResult from a dict
event_hub_connection_list_result_from_dict = EventHubConnectionListResult.from_dict(event_hub_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


