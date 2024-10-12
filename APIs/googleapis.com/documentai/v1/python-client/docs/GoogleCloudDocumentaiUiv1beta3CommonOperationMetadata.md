# GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata

The common metadata for long running operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time of the operation. | [optional] 
**resource** | **str** | A related resource to this operation. | [optional] 
**state** | **str** | The state of the operation. | [optional] 
**state_message** | **str** | A message providing more details about the current state of processing. | [optional] 
**update_time** | **str** | The last update time of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_common_operation_metadata import GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata from a JSON string
google_cloud_documentai_uiv1beta3_common_operation_metadata_instance = GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_common_operation_metadata_dict = google_cloud_documentai_uiv1beta3_common_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata from a dict
google_cloud_documentai_uiv1beta3_common_operation_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.from_dict(google_cloud_documentai_uiv1beta3_common_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


