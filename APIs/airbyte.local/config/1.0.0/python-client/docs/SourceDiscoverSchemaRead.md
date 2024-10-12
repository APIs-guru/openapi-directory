# SourceDiscoverSchemaRead

Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**breaking_change** | **bool** |  | [optional] 
**catalog** | [**AirbyteCatalog**](AirbyteCatalog.md) |  | [optional] 
**catalog_diff** | [**CatalogDiff**](CatalogDiff.md) |  | [optional] 
**catalog_id** | **str** |  | [optional] 
**connection_status** | [**ConnectionStatus**](ConnectionStatus.md) |  | [optional] 
**job_info** | [**SynchronousJobRead**](SynchronousJobRead.md) |  | 

## Example

```python
from openapi_client.models.source_discover_schema_read import SourceDiscoverSchemaRead

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDiscoverSchemaRead from a JSON string
source_discover_schema_read_instance = SourceDiscoverSchemaRead.from_json(json)
# print the JSON string representation of the object
print(SourceDiscoverSchemaRead.to_json())

# convert the object into a dict
source_discover_schema_read_dict = source_discover_schema_read_instance.to_dict()
# create an instance of SourceDiscoverSchemaRead from a dict
source_discover_schema_read_from_dict = SourceDiscoverSchemaRead.from_dict(source_discover_schema_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


