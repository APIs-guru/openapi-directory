# WebBackendConnectionListItem

Information about a connection that shows up in the connection list view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | 
**destination** | [**DestinationSnippetRead**](DestinationSnippetRead.md) |  | 
**is_syncing** | **bool** |  | 
**latest_sync_job_created_at** | **int** | epoch time of the latest sync job. null if no sync job has taken place. | [optional] 
**latest_sync_job_status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**name** | **str** |  | 
**schedule_data** | [**ConnectionScheduleData**](ConnectionScheduleData.md) |  | [optional] 
**schedule_type** | [**ConnectionScheduleType**](ConnectionScheduleType.md) |  | [optional] 
**schema_change** | [**SchemaChange**](SchemaChange.md) |  | 
**source** | [**SourceSnippetRead**](SourceSnippetRead.md) |  | 
**status** | [**ConnectionStatus**](ConnectionStatus.md) |  | 

## Example

```python
from openapi_client.models.web_backend_connection_list_item import WebBackendConnectionListItem

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendConnectionListItem from a JSON string
web_backend_connection_list_item_instance = WebBackendConnectionListItem.from_json(json)
# print the JSON string representation of the object
print(WebBackendConnectionListItem.to_json())

# convert the object into a dict
web_backend_connection_list_item_dict = web_backend_connection_list_item_instance.to_dict()
# create an instance of WebBackendConnectionListItem from a dict
web_backend_connection_list_item_from_dict = WebBackendConnectionListItem.from_dict(web_backend_connection_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


