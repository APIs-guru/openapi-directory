# GoogleCloudAiplatformV1beta1ExportDataRequest

Request message for DatasetService.ExportData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_config** | [**GoogleCloudAiplatformV1beta1ExportDataConfig**](GoogleCloudAiplatformV1beta1ExportDataConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_data_request import GoogleCloudAiplatformV1beta1ExportDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportDataRequest from a JSON string
google_cloud_aiplatform_v1beta1_export_data_request_instance = GoogleCloudAiplatformV1beta1ExportDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportDataRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_data_request_dict = google_cloud_aiplatform_v1beta1_export_data_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportDataRequest from a dict
google_cloud_aiplatform_v1beta1_export_data_request_from_dict = GoogleCloudAiplatformV1beta1ExportDataRequest.from_dict(google_cloud_aiplatform_v1beta1_export_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


