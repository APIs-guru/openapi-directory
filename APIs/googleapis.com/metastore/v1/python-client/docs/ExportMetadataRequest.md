# ExportMetadataRequest

Request message for DataprocMetastore.ExportMetadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_dump_type** | **str** | Optional. The type of the database dump. If unspecified, defaults to MYSQL. | [optional] 
**destination_gcs_folder** | **str** | A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it. | [optional] 
**request_id** | **str** | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. | [optional] 

## Example

```python
from openapi_client.models.export_metadata_request import ExportMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportMetadataRequest from a JSON string
export_metadata_request_instance = ExportMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(ExportMetadataRequest.to_json())

# convert the object into a dict
export_metadata_request_dict = export_metadata_request_instance.to_dict()
# create an instance of ExportMetadataRequest from a dict
export_metadata_request_from_dict = ExportMetadataRequest.from_dict(export_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


