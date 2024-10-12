# ConnectionSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | [optional] 
**destination** | [**DestinationSearch**](DestinationSearch.md) |  | [optional] 
**destination_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**namespace_definition** | [**NamespaceDefinitionType**](NamespaceDefinitionType.md) |  | [optional] 
**namespace_format** | **str** | Used when namespaceDefinition is &#39;customformat&#39;. If blank then behaves like namespaceDefinition &#x3D; &#39;destination&#39;. If \&quot;${SOURCE_NAMESPACE}\&quot; then behaves like namespaceDefinition &#x3D; &#39;source&#39;. | [optional] 
**prefix** | **str** | Prefix that will be prepended to the name of each stream when it is written to the destination. | [optional] 
**schedule** | [**ConnectionSchedule**](ConnectionSchedule.md) |  | [optional] 
**schedule_data** | [**ConnectionScheduleData**](ConnectionScheduleData.md) |  | [optional] 
**schedule_type** | [**ConnectionScheduleType**](ConnectionScheduleType.md) |  | [optional] 
**source** | [**SourceSearch**](SourceSearch.md) |  | [optional] 
**source_id** | **str** |  | [optional] 
**status** | [**ConnectionStatus**](ConnectionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_search import ConnectionSearch

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSearch from a JSON string
connection_search_instance = ConnectionSearch.from_json(json)
# print the JSON string representation of the object
print(ConnectionSearch.to_json())

# convert the object into a dict
connection_search_dict = connection_search_instance.to_dict()
# create an instance of ConnectionSearch from a dict
connection_search_from_dict = ConnectionSearch.from_dict(connection_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


