# ImageObjectDetectionModelMetadata

Model metadata specific to image object detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_type** | **str** | Optional. Type of the model. The available values are: * &#x60;cloud-high-accuracy-1&#x60; - (default) A model to be used via prediction calls to AutoML API. Expected to have a higher latency, but should also have a higher prediction quality than other models. * &#x60;cloud-low-latency-1&#x60; - A model to be used via prediction calls to AutoML API. Expected to have low latency, but may have lower prediction quality than other models. * &#x60;mobile-low-latency-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * &#x60;mobile-versatile-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * &#x60;mobile-high-accuracy-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. | [optional] 
**node_count** | **str** | Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the qps_per_node field. | [optional] 
**node_qps** | **float** | Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed. | [optional] 
**stop_reason** | **str** | Output only. The reason that this create model operation stopped, e.g. &#x60;BUDGET_REACHED&#x60;, &#x60;MODEL_CONVERGED&#x60;. | [optional] 
**train_budget_milli_node_hours** | **str** | The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual &#x60;train_cost&#x60; will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using full budget and the stop_reason will be &#x60;MODEL_CONVERGED&#x60;. Note, node_hour &#x3D; actual_hour * number_of_nodes_invovled. For model type &#x60;cloud-high-accuracy-1&#x60;(default) and &#x60;cloud-low-latency-1&#x60;, the train budget must be between 20,000 and 900,000 milli node hours, inclusive. The default value is 216, 000 which represents one day in wall time. For model type &#x60;mobile-low-latency-1&#x60;, &#x60;mobile-versatile-1&#x60;, &#x60;mobile-high-accuracy-1&#x60;, &#x60;mobile-core-ml-low-latency-1&#x60;, &#x60;mobile-core-ml-versatile-1&#x60;, &#x60;mobile-core-ml-high-accuracy-1&#x60;, the train budget must be between 1,000 and 100,000 milli node hours, inclusive. The default value is 24, 000 which represents one day in wall time. | [optional] 
**train_cost_milli_node_hours** | **str** | Output only. The actual train cost of creating this model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget. | [optional] 

## Example

```python
from openapi_client.models.image_object_detection_model_metadata import ImageObjectDetectionModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ImageObjectDetectionModelMetadata from a JSON string
image_object_detection_model_metadata_instance = ImageObjectDetectionModelMetadata.from_json(json)
# print the JSON string representation of the object
print(ImageObjectDetectionModelMetadata.to_json())

# convert the object into a dict
image_object_detection_model_metadata_dict = image_object_detection_model_metadata_instance.to_dict()
# create an instance of ImageObjectDetectionModelMetadata from a dict
image_object_detection_model_metadata_from_dict = ImageObjectDetectionModelMetadata.from_dict(image_object_detection_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


