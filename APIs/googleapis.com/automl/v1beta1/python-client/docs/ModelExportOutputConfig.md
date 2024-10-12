# ModelExportOutputConfig

Output configuration for ModelExport Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcr_destination** | [**GcrDestination**](GcrDestination.md) |  | [optional] 
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 
**model_format** | **str** | The format in which the model must be exported. The available, and default, formats depend on the problem and model type (if given problem and type combination doesn&#39;t have a format listed, it means its models are not exportable): * For Image Classification mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: \&quot;tflite\&quot; (default), \&quot;edgetpu_tflite\&quot;, \&quot;tf_saved_model\&quot;, \&quot;tf_js\&quot;, \&quot;docker\&quot;. * For Image Classification mobile-core-ml-low-latency-1, mobile-core-ml-versatile-1, mobile-core-ml-high-accuracy-1: \&quot;core_ml\&quot; (default). * For Image Object Detection mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: \&quot;tflite\&quot;, \&quot;tf_saved_model\&quot;, \&quot;tf_js\&quot;. * For Video Classification cloud, \&quot;tf_saved_model\&quot;. * For Video Object Tracking cloud, \&quot;tf_saved_model\&quot;. * For Video Object Tracking mobile-versatile-1: \&quot;tflite\&quot;, \&quot;edgetpu_tflite\&quot;, \&quot;tf_saved_model\&quot;, \&quot;docker\&quot;. * For Video Object Tracking mobile-coral-versatile-1: \&quot;tflite\&quot;, \&quot;edgetpu_tflite\&quot;, \&quot;docker\&quot;. * For Video Object Tracking mobile-coral-low-latency-1: \&quot;tflite\&quot;, \&quot;edgetpu_tflite\&quot;, \&quot;docker\&quot;. * For Video Object Tracking mobile-jetson-versatile-1: \&quot;tf_saved_model\&quot;, \&quot;docker\&quot;. * For Tables: \&quot;docker\&quot;. Formats description: * tflite - Used for Android mobile devices. * edgetpu_tflite - Used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. * tf_saved_model - A tensorflow model in SavedModel format. * tf_js - A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. * docker - Used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system. See more at [containers quickstart](https: //cloud.google.com/vision/automl/docs/containers-gcs-quickstart) * core_ml - Used for iOS mobile devices. | [optional] 
**params** | **Dict[str, str]** | Additional model-type and format specific parameters describing the requirements for the to be exported model files, any string must be up to 25000 characters long. * For &#x60;docker&#x60; format: &#x60;cpu_architecture&#x60; - (string) \&quot;x86_64\&quot; (default). &#x60;gpu_architecture&#x60; - (string) \&quot;none\&quot; (default), \&quot;nvidia\&quot;. | [optional] 

## Example

```python
from openapi_client.models.model_export_output_config import ModelExportOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ModelExportOutputConfig from a JSON string
model_export_output_config_instance = ModelExportOutputConfig.from_json(json)
# print the JSON string representation of the object
print(ModelExportOutputConfig.to_json())

# convert the object into a dict
model_export_output_config_dict = model_export_output_config_instance.to_dict()
# create an instance of ModelExportOutputConfig from a dict
model_export_output_config_from_dict = ModelExportOutputConfig.from_dict(model_export_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


