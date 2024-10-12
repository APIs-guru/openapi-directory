# MetadataImport

A metastore resource that imports metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the metadata import was started. | [optional] [readonly] 
**database_dump** | [**DatabaseDump**](DatabaseDump.md) |  | [optional] 
**description** | **str** | The description of the metadata import. | [optional] 
**end_time** | **str** | Output only. The time when the metadata import finished. | [optional] [readonly] 
**name** | **str** | Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}. | [optional] 
**state** | **str** | Output only. The current state of the metadata import. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the metadata import was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metadata_import import MetadataImport

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataImport from a JSON string
metadata_import_instance = MetadataImport.from_json(json)
# print the JSON string representation of the object
print(MetadataImport.to_json())

# convert the object into a dict
metadata_import_dict = metadata_import_instance.to_dict()
# create an instance of MetadataImport from a dict
metadata_import_from_dict = MetadataImport.from_dict(metadata_import_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


