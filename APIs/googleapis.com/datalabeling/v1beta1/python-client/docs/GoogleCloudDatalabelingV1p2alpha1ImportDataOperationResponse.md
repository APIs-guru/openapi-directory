# GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse

Response used for ImportData longrunning operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Ouptut only. The name of imported dataset. | [optional] 
**import_count** | **int** | Output only. Number of examples imported successfully. | [optional] 
**total_count** | **int** | Output only. Total number of examples requested to import | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1p2alpha1_import_data_operation_response import GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse from a JSON string
google_cloud_datalabeling_v1p2alpha1_import_data_operation_response_instance = GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1p2alpha1_import_data_operation_response_dict = google_cloud_datalabeling_v1p2alpha1_import_data_operation_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse from a dict
google_cloud_datalabeling_v1p2alpha1_import_data_operation_response_from_dict = GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse.from_dict(google_cloud_datalabeling_v1p2alpha1_import_data_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


