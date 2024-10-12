# SourceDiscoverSchemaRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | [optional] 
**disable_cache** | **bool** |  | [optional] 
**notify_schema_change** | **bool** |  | [optional] 
**source_id** | **str** |  | 

## Example

```python
from openapi_client.models.source_discover_schema_request_body import SourceDiscoverSchemaRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SourceDiscoverSchemaRequestBody from a JSON string
source_discover_schema_request_body_instance = SourceDiscoverSchemaRequestBody.from_json(json)
# print the JSON string representation of the object
print(SourceDiscoverSchemaRequestBody.to_json())

# convert the object into a dict
source_discover_schema_request_body_dict = source_discover_schema_request_body_instance.to_dict()
# create an instance of SourceDiscoverSchemaRequestBody from a dict
source_discover_schema_request_body_from_dict = SourceDiscoverSchemaRequestBody.from_dict(source_discover_schema_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


