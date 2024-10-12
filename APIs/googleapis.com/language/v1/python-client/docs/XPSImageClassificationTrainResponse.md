# XPSImageClassificationTrainResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_count** | **str** | Total number of classes. | [optional] 
**export_model_spec** | [**XPSImageExportModelSpec**](XPSImageExportModelSpec.md) |  | [optional] 
**model_artifact_spec** | [**XPSImageModelArtifactSpec**](XPSImageModelArtifactSpec.md) |  | [optional] 
**model_serving_spec** | [**XPSImageModelServingSpec**](XPSImageModelServingSpec.md) |  | [optional] 
**stop_reason** | **str** | Stop reason for training job, e.g. &#39;TRAIN_BUDGET_REACHED&#39;, &#39;MODEL_CONVERGED&#39;, &#39;MODEL_EARLY_STOPPED&#39;. | [optional] 
**train_cost_in_node_time** | **str** | The actual cost to create this model. - For edge type model, the cost is expressed in node hour. - For cloud type model,the cost is expressed in compute hour. - Populated for models created before GA. To be deprecated after GA. | [optional] 
**train_cost_node_seconds** | **str** | The actual training cost, expressed in node seconds. Populated for models trained in node time. | [optional] 

## Example

```python
from openapi_client.models.xps_image_classification_train_response import XPSImageClassificationTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageClassificationTrainResponse from a JSON string
xps_image_classification_train_response_instance = XPSImageClassificationTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSImageClassificationTrainResponse.to_json())

# convert the object into a dict
xps_image_classification_train_response_dict = xps_image_classification_train_response_instance.to_dict()
# create an instance of XPSImageClassificationTrainResponse from a dict
xps_image_classification_train_response_from_dict = XPSImageClassificationTrainResponse.from_dict(xps_image_classification_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


