# XPSImageSegmentationTrainResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_maps** | [**List[XPSColorMap]**](XPSColorMap.md) | Color map of the model. | [optional] 
**export_model_spec** | [**XPSImageExportModelSpec**](XPSImageExportModelSpec.md) |  | [optional] 
**model_artifact_spec** | [**XPSImageModelArtifactSpec**](XPSImageModelArtifactSpec.md) |  | [optional] 
**model_serving_spec** | [**XPSImageModelServingSpec**](XPSImageModelServingSpec.md) |  | [optional] 
**stop_reason** | **str** | Stop reason for training job, e.g. &#39;TRAIN_BUDGET_REACHED&#39;, &#39;MODEL_CONVERGED&#39;. | [optional] 
**train_cost_node_seconds** | **str** | The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. | [optional] 

## Example

```python
from openapi_client.models.xps_image_segmentation_train_response import XPSImageSegmentationTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageSegmentationTrainResponse from a JSON string
xps_image_segmentation_train_response_instance = XPSImageSegmentationTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSImageSegmentationTrainResponse.to_json())

# convert the object into a dict
xps_image_segmentation_train_response_dict = xps_image_segmentation_train_response_instance.to_dict()
# create an instance of XPSImageSegmentationTrainResponse from a dict
xps_image_segmentation_train_response_from_dict = XPSImageSegmentationTrainResponse.from_dict(xps_image_segmentation_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


