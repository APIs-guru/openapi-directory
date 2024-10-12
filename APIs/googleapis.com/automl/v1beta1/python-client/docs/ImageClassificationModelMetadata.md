# ImageClassificationModelMetadata

Model metadata for image classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model_id** | **str** | Optional. The ID of the &#x60;base&#x60; model. If it is specified, the new model will be created based on the &#x60;base&#x60; model. Otherwise, the new model will be created from scratch. The &#x60;base&#x60; model must be in the same &#x60;project&#x60; and &#x60;location&#x60; as the new model to create, and have the same &#x60;model_type&#x60;. | [optional] 
**model_type** | **str** | Optional. Type of the model. The available values are: * &#x60;cloud&#x60; - Model to be used via prediction calls to AutoML API. This is the default value. * &#x60;mobile-low-latency-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * &#x60;mobile-versatile-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * &#x60;mobile-high-accuracy-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. * &#x60;mobile-core-ml-low-latency-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have low latency, but may have lower prediction quality than other models. * &#x60;mobile-core-ml-versatile-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. * &#x60;mobile-core-ml-high-accuracy-1&#x60; - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. | [optional] 
**node_count** | **str** | Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the node_qps field. | [optional] 
**node_qps** | **float** | Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed. | [optional] 
**stop_reason** | **str** | Output only. The reason that this create model operation stopped, e.g. &#x60;BUDGET_REACHED&#x60;, &#x60;MODEL_CONVERGED&#x60;. | [optional] 
**train_budget** | **str** | Required. The train budget of creating this model, expressed in hours. The actual &#x60;train_cost&#x60; will be equal or less than this value. | [optional] 
**train_cost** | **str** | Output only. The actual train cost of creating this model, expressed in hours. If this model is created from a &#x60;base&#x60; model, the train cost used to create the &#x60;base&#x60; model are not included. | [optional] 

## Example

```python
from openapi_client.models.image_classification_model_metadata import ImageClassificationModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ImageClassificationModelMetadata from a JSON string
image_classification_model_metadata_instance = ImageClassificationModelMetadata.from_json(json)
# print the JSON string representation of the object
print(ImageClassificationModelMetadata.to_json())

# convert the object into a dict
image_classification_model_metadata_dict = image_classification_model_metadata_instance.to_dict()
# create an instance of ImageClassificationModelMetadata from a dict
image_classification_model_metadata_from_dict = ImageClassificationModelMetadata.from_dict(image_classification_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


