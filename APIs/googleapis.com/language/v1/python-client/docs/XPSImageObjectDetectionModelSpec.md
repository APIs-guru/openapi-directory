# XPSImageObjectDetectionModelSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_count** | **str** | Total number of classes. | [optional] 
**export_model_spec** | [**XPSImageExportModelSpec**](XPSImageExportModelSpec.md) |  | [optional] 
**max_bounding_box_count** | **str** | Max number of bounding box. | [optional] 
**model_artifact_spec** | [**XPSImageModelArtifactSpec**](XPSImageModelArtifactSpec.md) |  | [optional] 
**model_serving_spec** | [**XPSImageModelServingSpec**](XPSImageModelServingSpec.md) |  | [optional] 
**stop_reason** | **str** | Stop reason for training job, e.g. &#39;TRAIN_BUDGET_REACHED&#39;, &#39;MODEL_CONVERGED&#39;. | [optional] 
**train_cost_node_seconds** | **str** | The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. | [optional] 

## Example

```python
from openapi_client.models.xps_image_object_detection_model_spec import XPSImageObjectDetectionModelSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageObjectDetectionModelSpec from a JSON string
xps_image_object_detection_model_spec_instance = XPSImageObjectDetectionModelSpec.from_json(json)
# print the JSON string representation of the object
print(XPSImageObjectDetectionModelSpec.to_json())

# convert the object into a dict
xps_image_object_detection_model_spec_dict = xps_image_object_detection_model_spec_instance.to_dict()
# create an instance of XPSImageObjectDetectionModelSpec from a dict
xps_image_object_detection_model_spec_from_dict = XPSImageObjectDetectionModelSpec.from_dict(xps_image_object_detection_model_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


