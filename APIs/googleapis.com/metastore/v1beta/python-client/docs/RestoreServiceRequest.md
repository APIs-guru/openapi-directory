# RestoreServiceRequest

Request message for DataprocMetastore.Restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Optional. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}. Mutually exclusive with backup_location, and exactly one of the two must be set. | [optional] 
**backup_location** | **str** | Optional. A Cloud Storage URI specifying the location of the backup artifacts, namely - backup avro files under \&quot;avro/\&quot;, backup_metastore.json and service.json, in the following form:gs://. Mutually exclusive with backup, and exactly one of the two must be set. | [optional] 
**request_id** | **str** | Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported. | [optional] 
**restore_type** | **str** | Optional. The type of restore. If unspecified, defaults to METADATA_ONLY. | [optional] 

## Example

```python
from openapi_client.models.restore_service_request import RestoreServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreServiceRequest from a JSON string
restore_service_request_instance = RestoreServiceRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreServiceRequest.to_json())

# convert the object into a dict
restore_service_request_dict = restore_service_request_instance.to_dict()
# create an instance of RestoreServiceRequest from a dict
restore_service_request_from_dict = RestoreServiceRequest.from_dict(restore_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


