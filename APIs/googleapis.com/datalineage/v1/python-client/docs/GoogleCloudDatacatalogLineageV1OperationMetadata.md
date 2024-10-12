# GoogleCloudDatacatalogLineageV1OperationMetadata

Metadata describing the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp of the operation submission to the server. | [optional] [readonly] 
**end_time** | **str** | Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing. | [optional] [readonly] 
**operation_type** | **str** | Output only. The type of the operation being performed. | [optional] [readonly] 
**resource** | **str** | Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on. | [optional] [readonly] 
**resource_uuid** | **str** | Output only. The UUID of the resource being operated on. | [optional] [readonly] 
**state** | **str** | Output only. The current operation state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_operation_metadata import GoogleCloudDatacatalogLineageV1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1OperationMetadata from a JSON string
google_cloud_datacatalog_lineage_v1_operation_metadata_instance = GoogleCloudDatacatalogLineageV1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1OperationMetadata.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_operation_metadata_dict = google_cloud_datacatalog_lineage_v1_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1OperationMetadata from a dict
google_cloud_datacatalog_lineage_v1_operation_metadata_from_dict = GoogleCloudDatacatalogLineageV1OperationMetadata.from_dict(google_cloud_datacatalog_lineage_v1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


