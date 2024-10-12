# GoogleCloudAiplatformV1beta1ExportDataConfig

Describes what part of the Dataset is to be exported, the destination of the export and how to export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations_filter** | **str** | An expression for filtering what part of the Dataset is to be exported. Only Annotations that match this filter will be exported. The filter syntax is the same as in ListAnnotations. | [optional] 
**fraction_split** | [**GoogleCloudAiplatformV1beta1ExportFractionSplit**](GoogleCloudAiplatformV1beta1ExportFractionSplit.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudAiplatformV1beta1GcsDestination**](GoogleCloudAiplatformV1beta1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_data_config import GoogleCloudAiplatformV1beta1ExportDataConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportDataConfig from a JSON string
google_cloud_aiplatform_v1beta1_export_data_config_instance = GoogleCloudAiplatformV1beta1ExportDataConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportDataConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_data_config_dict = google_cloud_aiplatform_v1beta1_export_data_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportDataConfig from a dict
google_cloud_aiplatform_v1beta1_export_data_config_from_dict = GoogleCloudAiplatformV1beta1ExportDataConfig.from_dict(google_cloud_aiplatform_v1beta1_export_data_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


