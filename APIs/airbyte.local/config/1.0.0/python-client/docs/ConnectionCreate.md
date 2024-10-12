# ConnectionCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_id** | **str** |  | 
**geography** | [**Geography**](Geography.md) |  | [optional] 
**name** | **str** | Optional name of the connection | [optional] 
**namespace_definition** | [**NamespaceDefinitionType**](NamespaceDefinitionType.md) |  | [optional] 
**namespace_format** | **str** | Used when namespaceDefinition is &#39;customformat&#39;. If blank then behaves like namespaceDefinition &#x3D; &#39;destination&#39;. If \&quot;${SOURCE_NAMESPACE}\&quot; then behaves like namespaceDefinition &#x3D; &#39;source&#39;. | [optional] 
**non_breaking_changes_preference** | [**NonBreakingChangesPreference**](NonBreakingChangesPreference.md) |  | [optional] 
**notify_schema_changes** | **bool** |  | [optional] 
**operation_ids** | **List[str]** |  | [optional] 
**prefix** | **str** | Prefix that will be prepended to the name of each stream when it is written to the destination. | [optional] 
**resource_requirements** | [**ResourceRequirements**](ResourceRequirements.md) |  | [optional] 
**schedule** | [**ConnectionSchedule**](ConnectionSchedule.md) |  | [optional] 
**schedule_data** | [**ConnectionScheduleData**](ConnectionScheduleData.md) |  | [optional] 
**schedule_type** | [**ConnectionScheduleType**](ConnectionScheduleType.md) |  | [optional] 
**source_catalog_id** | **str** |  | [optional] 
**source_id** | **str** |  | 
**status** | [**ConnectionStatus**](ConnectionStatus.md) |  | 
**sync_catalog** | [**AirbyteCatalog**](AirbyteCatalog.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_create import ConnectionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionCreate from a JSON string
connection_create_instance = ConnectionCreate.from_json(json)
# print the JSON string representation of the object
print(ConnectionCreate.to_json())

# convert the object into a dict
connection_create_dict = connection_create_instance.to_dict()
# create an instance of ConnectionCreate from a dict
connection_create_from_dict = ConnectionCreate.from_dict(connection_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


