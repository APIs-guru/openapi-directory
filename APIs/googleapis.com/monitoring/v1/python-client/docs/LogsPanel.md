# LogsPanel

A widget that displays a stream of log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | A filter that chooses which log entries to return. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries. | [optional] 
**resource_names** | **List[str]** | The names of logging resources to collect logs for. Currently only projects are supported. If empty, the widget will default to the host project. | [optional] 

## Example

```python
from openapi_client.models.logs_panel import LogsPanel

# TODO update the JSON string below
json = "{}"
# create an instance of LogsPanel from a JSON string
logs_panel_instance = LogsPanel.from_json(json)
# print the JSON string representation of the object
print(LogsPanel.to_json())

# convert the object into a dict
logs_panel_dict = logs_panel_instance.to_dict()
# create an instance of LogsPanel from a dict
logs_panel_from_dict = LogsPanel.from_dict(logs_panel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


