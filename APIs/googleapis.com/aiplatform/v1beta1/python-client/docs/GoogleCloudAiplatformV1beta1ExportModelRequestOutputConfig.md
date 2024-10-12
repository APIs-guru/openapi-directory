# GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig

Output configuration for the Model export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_destination** | [**GoogleCloudAiplatformV1beta1GcsDestination**](GoogleCloudAiplatformV1beta1GcsDestination.md) |  | [optional] 
**export_format_id** | **str** | The ID of the format in which the Model must be exported. Each Model lists the export formats it supports. If no value is provided here, then the first from the list of the Model&#39;s supported formats is used by default. | [optional] 
**image_destination** | [**GoogleCloudAiplatformV1beta1ContainerRegistryDestination**](GoogleCloudAiplatformV1beta1ContainerRegistryDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_model_request_output_config import GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig from a JSON string
google_cloud_aiplatform_v1beta1_export_model_request_output_config_instance = GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_model_request_output_config_dict = google_cloud_aiplatform_v1beta1_export_model_request_output_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig from a dict
google_cloud_aiplatform_v1beta1_export_model_request_output_config_from_dict = GoogleCloudAiplatformV1beta1ExportModelRequestOutputConfig.from_dict(google_cloud_aiplatform_v1beta1_export_model_request_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


