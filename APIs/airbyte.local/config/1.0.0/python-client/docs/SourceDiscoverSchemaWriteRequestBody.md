# SourceDiscoverSchemaWriteRequestBody

to write this requested object to database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog** | [**AirbyteCatalog**](AirbyteCatalog.md) |  | 
**configuration_hash** | **str** |  | [optional] 
**connector_version** | **str** |  | [optional] 
**source_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.source_discover_schema_write_request_body import SourceDiscoverSchemaWriteRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDiscoverSchemaWriteRequestBody from a JSON string
source_discover_schema_write_request_body_instance = SourceDiscoverSchemaWriteRequestBody.from_json(json)
# print the JSON string representation of the object
print(SourceDiscoverSchemaWriteRequestBody.to_json())

# convert the object into a dict
source_discover_schema_write_request_body_dict = source_discover_schema_write_request_body_instance.to_dict()
# create an instance of SourceDiscoverSchemaWriteRequestBody from a dict
source_discover_schema_write_request_body_from_dict = SourceDiscoverSchemaWriteRequestBody.from_dict(source_discover_schema_write_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


