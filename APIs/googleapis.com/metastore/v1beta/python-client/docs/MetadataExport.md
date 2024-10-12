# MetadataExport

The details of a metadata export operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_dump_type** | **str** | Output only. The type of the database dump. | [optional] [readonly] 
**destination_gcs_uri** | **str** | Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated. | [optional] [readonly] 
**end_time** | **str** | Output only. The time when the export ended. | [optional] [readonly] 
**start_time** | **str** | Output only. The time when the export started. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the export. | [optional] [readonly] 

## Example

```python
from openapi_client.models.metadata_export import MetadataExport

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataExport from a JSON string
metadata_export_instance = MetadataExport.from_json(json)
# print the JSON string representation of the object
print(MetadataExport.to_json())

# convert the object into a dict
metadata_export_dict = metadata_export_instance.to_dict()
# create an instance of MetadataExport from a dict
metadata_export_from_dict = MetadataExport.from_dict(metadata_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


