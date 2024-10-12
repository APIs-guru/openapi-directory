# CopyLogEntriesMetadata

Metadata for CopyLogEntries long running operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_requested** | **bool** | Identifies whether the user has requested cancellation of the operation. | [optional] 
**destination** | **str** | Destination to which to copy log entries.For example, a Cloud Storage bucket:\&quot;storage.googleapis.com/my-cloud-storage-bucket\&quot; | [optional] 
**end_time** | **str** | The end time of an operation. | [optional] 
**progress** | **int** | Estimated progress of the operation (0 - 100%). | [optional] 
**request** | [**CopyLogEntriesRequest**](CopyLogEntriesRequest.md) |  | [optional] 
**source** | **str** | Source from which to copy log entries.For example, a log bucket:\&quot;projects/my-project/locations/global/buckets/my-source-bucket\&quot; | [optional] 
**start_time** | **str** | The create time of an operation. | [optional] 
**state** | **str** | Output only. State of an operation. | [optional] [readonly] 
**verb** | **str** | Name of the verb executed by the operation.For example,\&quot;copy\&quot; | [optional] 
**writer_identity** | **str** | The IAM identity of a service account that must be granted access to the destination.If the service account is not granted permission to the destination within an hour, the operation will be cancelled.For example: \&quot;serviceAccount:foo@bar.com\&quot; | [optional] 

## Example

```python
from openapi_client.models.copy_log_entries_metadata import CopyLogEntriesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CopyLogEntriesMetadata from a JSON string
copy_log_entries_metadata_instance = CopyLogEntriesMetadata.from_json(json)
# print the JSON string representation of the object
print(CopyLogEntriesMetadata.to_json())

# convert the object into a dict
copy_log_entries_metadata_dict = copy_log_entries_metadata_instance.to_dict()
# create an instance of CopyLogEntriesMetadata from a dict
copy_log_entries_metadata_from_dict = CopyLogEntriesMetadata.from_dict(copy_log_entries_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


