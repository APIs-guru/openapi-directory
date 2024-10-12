# GoogleCloudAiplatformV1ModelExportFormat

Represents export format supported by the Model. All formats export to Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exportable_contents** | **List[str]** | Output only. The content of this Model that may be exported. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the export format. The possible format IDs are: * &#x60;tflite&#x60; Used for Android mobile devices. * &#x60;edgetpu-tflite&#x60; Used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. * &#x60;tf-saved-model&#x60; A tensorflow model in SavedModel format. * &#x60;tf-js&#x60; A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. * &#x60;core-ml&#x60; Used for iOS mobile devices. * &#x60;custom-trained&#x60; A Model that was uploaded or trained by custom code. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_export_format import GoogleCloudAiplatformV1ModelExportFormat

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelExportFormat from a JSON string
google_cloud_aiplatform_v1_model_export_format_instance = GoogleCloudAiplatformV1ModelExportFormat.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelExportFormat.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_export_format_dict = google_cloud_aiplatform_v1_model_export_format_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelExportFormat from a dict
google_cloud_aiplatform_v1_model_export_format_from_dict = GoogleCloudAiplatformV1ModelExportFormat.from_dict(google_cloud_aiplatform_v1_model_export_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


