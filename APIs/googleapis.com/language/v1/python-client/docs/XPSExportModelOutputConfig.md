# XPSExportModelOutputConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_ml_format** | **object** | A model format used for iOS mobile devices. | [optional] 
**docker_format** | [**XPSDockerFormat**](XPSDockerFormat.md) |  | [optional] 
**edge_tpu_tf_lite_format** | **object** | A model format used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. | [optional] 
**export_firebase_auxiliary_info** | **bool** | For any model and format: If true, will additionally export FirebaseExportedModelInfo in a firebase.txt file. | [optional] 
**output_gcr_uri** | **str** | The Google Contained Registry (GCR) path the exported files to be pushed to. This location is set if the exported format is DOCKDER. | [optional] 
**output_gcs_uri** | **str** | The Google Cloud Storage (GCS) directory where XPS will output the exported models and related files. Format: gs://bucket/directory | [optional] 
**tf_js_format** | **object** | A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. | [optional] 
**tf_lite_format** | **object** | LINT.IfChange A model format used for mobile and IoT devices. See https://www.tensorflow.org/lite. | [optional] 
**tf_saved_model_format** | **object** | A tensorflow model format in SavedModel format. | [optional] 

## Example

```python
from openapi_client.models.xps_export_model_output_config import XPSExportModelOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of XPSExportModelOutputConfig from a JSON string
xps_export_model_output_config_instance = XPSExportModelOutputConfig.from_json(json)
# print the JSON string representation of the object
print(XPSExportModelOutputConfig.to_json())

# convert the object into a dict
xps_export_model_output_config_dict = xps_export_model_output_config_instance.to_dict()
# create an instance of XPSExportModelOutputConfig from a dict
xps_export_model_output_config_from_dict = XPSExportModelOutputConfig.from_dict(xps_export_model_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


