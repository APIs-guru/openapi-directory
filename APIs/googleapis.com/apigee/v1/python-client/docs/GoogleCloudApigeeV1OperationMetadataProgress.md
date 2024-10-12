# GoogleCloudApigeeV1OperationMetadataProgress

Information about operation progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation&#39;s progress. | [optional] 
**details** | **Dict[str, object]** | The additional details of the progress. | [optional] 
**percent_done** | **int** | The percentage of the operation progress. | [optional] 
**state** | **str** | State of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_operation_metadata_progress import GoogleCloudApigeeV1OperationMetadataProgress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OperationMetadataProgress from a JSON string
google_cloud_apigee_v1_operation_metadata_progress_instance = GoogleCloudApigeeV1OperationMetadataProgress.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OperationMetadataProgress.to_json())

# convert the object into a dict
google_cloud_apigee_v1_operation_metadata_progress_dict = google_cloud_apigee_v1_operation_metadata_progress_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OperationMetadataProgress from a dict
google_cloud_apigee_v1_operation_metadata_progress_from_dict = GoogleCloudApigeeV1OperationMetadataProgress.from_dict(google_cloud_apigee_v1_operation_metadata_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


