# ExportMetadata

ExportMetadata represents the metadata of the exported artifacts. The metadata.json file in export artifact can be parsed as this message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_encryption_key** | [**ExportMetadataEncryptionKey**](ExportMetadataEncryptionKey.md) |  | [optional] 
**file_paths** | **List[str]** | List of files created as part of export artifact (excluding the metadata). The paths are relative to the folder containing the metadata. | [optional] 
**looker_encryption_key** | **str** | Looker encryption key, encrypted with the provided export encryption key. This value will only be populated if the looker instance uses Looker managed encryption instead of CMEK. | [optional] 
**looker_instance** | **str** | Name of the exported instance. Format: projects/{project}/locations/{location}/instances/{instance} | [optional] 
**looker_platform_edition** | **str** | Platform edition of the exported instance. | [optional] 
**looker_version** | **str** | Version of instance when the export was created. | [optional] 
**source** | **str** | The source type of the migration. | [optional] 

## Example

```python
from openapi_client.models.export_metadata import ExportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ExportMetadata from a JSON string
export_metadata_instance = ExportMetadata.from_json(json)
# print the JSON string representation of the object
print(ExportMetadata.to_json())

# convert the object into a dict
export_metadata_dict = export_metadata_instance.to_dict()
# create an instance of ExportMetadata from a dict
export_metadata_from_dict = ExportMetadata.from_dict(export_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


