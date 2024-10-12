# SyncFullSchemaPropertiesListResult

A list of sync schema properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncFullSchemaProperties]**](SyncFullSchemaProperties.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_full_schema_properties_list_result import SyncFullSchemaPropertiesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncFullSchemaPropertiesListResult from a JSON string
sync_full_schema_properties_list_result_instance = SyncFullSchemaPropertiesListResult.from_json(json)
# print the JSON string representation of the object
print(SyncFullSchemaPropertiesListResult.to_json())

# convert the object into a dict
sync_full_schema_properties_list_result_dict = sync_full_schema_properties_list_result_instance.to_dict()
# create an instance of SyncFullSchemaPropertiesListResult from a dict
sync_full_schema_properties_list_result_from_dict = SyncFullSchemaPropertiesListResult.from_dict(sync_full_schema_properties_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


