# WebBackendConnectionUpdate

Used to apply a patch-style update to a connection, which means that null properties remain unchanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | 
**geography** | [**Geography**](Geography.md) |  | [optional] 
**name** | **str** | Name that will be set to the connection | [optional] 
**namespace_definition** | [**NamespaceDefinitionType**](NamespaceDefinitionType.md) |  | [optional] 
**namespace_format** | **str** | Used when namespaceDefinition is &#39;customformat&#39;. If blank then behaves like namespaceDefinition &#x3D; &#39;destination&#39;. If \&quot;${SOURCE_NAMESPACE}\&quot; then behaves like namespaceDefinition &#x3D; &#39;source&#39;. | [optional] 
**non_breaking_changes_preference** | [**NonBreakingChangesPreference**](NonBreakingChangesPreference.md) |  | [optional] 
**notify_schema_changes** | **bool** |  | [optional] 
**operations** | [**List[WebBackendOperationCreateOrUpdate]**](WebBackendOperationCreateOrUpdate.md) |  | [optional] 
**prefix** | **str** | Prefix that will be prepended to the name of each stream when it is written to the destination. | [optional] 
**resource_requirements** | [**ResourceRequirements**](ResourceRequirements.md) |  | [optional] 
**schedule** | [**ConnectionSchedule**](ConnectionSchedule.md) |  | [optional] 
**schedule_data** | [**ConnectionScheduleData**](ConnectionScheduleData.md) |  | [optional] 
**schedule_type** | [**ConnectionScheduleType**](ConnectionScheduleType.md) |  | [optional] 
**skip_reset** | **bool** |  | [optional] 
**source_catalog_id** | **str** |  | [optional] 
**status** | [**ConnectionStatus**](ConnectionStatus.md) |  | [optional] 
**sync_catalog** | [**AirbyteCatalog**](AirbyteCatalog.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_backend_connection_update import WebBackendConnectionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WebBackendConnectionUpdate from a JSON string
web_backend_connection_update_instance = WebBackendConnectionUpdate.from_json(json)
# print the JSON string representation of the object
print(WebBackendConnectionUpdate.to_json())

# convert the object into a dict
web_backend_connection_update_dict = web_backend_connection_update_instance.to_dict()
# create an instance of WebBackendConnectionUpdate from a dict
web_backend_connection_update_from_dict = WebBackendConnectionUpdate.from_dict(web_backend_connection_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


