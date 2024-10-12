# GoogleCloudApigeeV1OperationMetadata

Metadata describing an Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_type** | **str** |  | [optional] 
**progress** | [**GoogleCloudApigeeV1OperationMetadataProgress**](GoogleCloudApigeeV1OperationMetadataProgress.md) |  | [optional] 
**state** | **str** |  | [optional] 
**target_resource_name** | **str** | Name of the resource for which the operation is operating on. | [optional] 
**warnings** | **List[str]** | Warnings encountered while executing the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_operation_metadata import GoogleCloudApigeeV1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OperationMetadata from a JSON string
google_cloud_apigee_v1_operation_metadata_instance = GoogleCloudApigeeV1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OperationMetadata.to_json())

# convert the object into a dict
google_cloud_apigee_v1_operation_metadata_dict = google_cloud_apigee_v1_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OperationMetadata from a dict
google_cloud_apigee_v1_operation_metadata_from_dict = GoogleCloudApigeeV1OperationMetadata.from_dict(google_cloud_apigee_v1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


