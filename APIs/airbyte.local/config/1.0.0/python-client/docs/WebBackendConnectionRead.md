# WebBackendConnectionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_diff** | [**CatalogDiff**](CatalogDiff.md) |  | [optional] 
**catalog_id** | **str** |  | [optional] 
**connection_id** | **str** |  | 
**destination** | [**DestinationRead**](DestinationRead.md) |  | 
**destination_id** | **str** |  | 
**geography** | [**Geography**](Geography.md) |  | [optional] 
**is_syncing** | **bool** |  | 
**latest_sync_job_created_at** | **int** | epoch time of the latest sync job. null if no sync job has taken place. | [optional] 
**latest_sync_job_status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**name** | **str** |  | 
**namespace_definition** | [**NamespaceDefinitionType**](NamespaceDefinitionType.md) |  | [optional] 
**namespace_format** | **str** | Used when namespaceDefinition is &#39;customformat&#39;. If blank then behaves like namespaceDefinition &#x3D; &#39;destination&#39;. If \&quot;${SOURCE_NAMESPACE}\&quot; then behaves like namespaceDefinition &#x3D; &#39;source&#39;. | [optional] 
**non_breaking_changes_preference** | [**NonBreakingChangesPreference**](NonBreakingChangesPreference.md) |  | 
**notify_schema_changes** | **bool** |  | 
**operation_ids** | **List[str]** |  | [optional] 
**operations** | [**List[OperationRead]**](OperationRead.md) |  | [optional] 
**prefix** | **str** | Prefix that will be prepended to the name of each stream when it is written to the destination. | [optional] 
**resource_requirements** | [**ResourceRequirements**](ResourceRequirements.md) |  | [optional] 
**schedule** | [**ConnectionSchedule**](ConnectionSchedule.md) |  | [optional] 
**schedule_data** | [**ConnectionScheduleData**](ConnectionScheduleData.md) |  | [optional] 
**schedule_type** | [**ConnectionScheduleType**](ConnectionScheduleType.md) |  | [optional] 
**schema_change** | [**SchemaChange**](SchemaChange.md) |  | 
**source** | [**SourceRead**](SourceRead.md) |  | 
**source_id** | **str** |  | 
**status** | [**ConnectionStatus**](ConnectionStatus.md) |  | 
**sync_catalog** | [**AirbyteCatalog**](AirbyteCatalog.md) |  | 

## Example

```python
from openapi_client.models.web_backend_connection_read import WebBackendConnectionRead

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendConnectionRead from a JSON string
web_backend_connection_read_instance = WebBackendConnectionRead.from_json(json)
# print the JSON string representation of the object
print(WebBackendConnectionRead.to_json())

# convert the object into a dict
web_backend_connection_read_dict = web_backend_connection_read_instance.to_dict()
# create an instance of WebBackendConnectionRead from a dict
web_backend_connection_read_from_dict = WebBackendConnectionRead.from_dict(web_backend_connection_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


