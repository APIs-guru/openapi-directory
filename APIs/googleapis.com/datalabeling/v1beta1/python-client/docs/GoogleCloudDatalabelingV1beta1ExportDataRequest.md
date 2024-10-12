# GoogleCloudDatalabelingV1beta1ExportDataRequest

Request message for ExportData API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It&#39;s in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} | [optional] 
**filter** | **str** | Optional. Filter is not supported at this moment. | [optional] 
**output_config** | [**GoogleCloudDatalabelingV1beta1OutputConfig**](GoogleCloudDatalabelingV1beta1OutputConfig.md) |  | [optional] 
**user_email_address** | **str** | Email of the user who started the export task and should be notified by email. If empty no notification will be sent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_export_data_request import GoogleCloudDatalabelingV1beta1ExportDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ExportDataRequest from a JSON string
google_cloud_datalabeling_v1beta1_export_data_request_instance = GoogleCloudDatalabelingV1beta1ExportDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ExportDataRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_export_data_request_dict = google_cloud_datalabeling_v1beta1_export_data_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ExportDataRequest from a dict
google_cloud_datalabeling_v1beta1_export_data_request_from_dict = GoogleCloudDatalabelingV1beta1ExportDataRequest.from_dict(google_cloud_datalabeling_v1beta1_export_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


