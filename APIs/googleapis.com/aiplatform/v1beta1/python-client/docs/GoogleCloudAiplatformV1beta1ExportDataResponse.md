# GoogleCloudAiplatformV1beta1ExportDataResponse

Response message for DatasetService.ExportData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exported_files** | **List[str]** | All of the files that are exported in this export operation. For custom code training export, only three (training, validation and test) Cloud Storage paths in wildcard format are populated (for example, gs://.../training-*). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_data_response import GoogleCloudAiplatformV1beta1ExportDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportDataResponse from a JSON string
google_cloud_aiplatform_v1beta1_export_data_response_instance = GoogleCloudAiplatformV1beta1ExportDataResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportDataResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_data_response_dict = google_cloud_aiplatform_v1beta1_export_data_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportDataResponse from a dict
google_cloud_aiplatform_v1beta1_export_data_response_from_dict = GoogleCloudAiplatformV1beta1ExportDataResponse.from_dict(google_cloud_aiplatform_v1beta1_export_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


