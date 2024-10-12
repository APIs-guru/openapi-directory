# XPSVideoActionRecognitionTrainResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_artifact_spec** | [**XPSVideoModelArtifactSpec**](XPSVideoModelArtifactSpec.md) |  | [optional] 
**train_cost_node_seconds** | **str** | The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour. | [optional] 

## Example

```python
from openapi_client.models.xps_video_action_recognition_train_response import XPSVideoActionRecognitionTrainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoActionRecognitionTrainResponse from a JSON string
xps_video_action_recognition_train_response_instance = XPSVideoActionRecognitionTrainResponse.from_json(json)
# print the JSON string representation of the object
print(XPSVideoActionRecognitionTrainResponse.to_json())

# convert the object into a dict
xps_video_action_recognition_train_response_dict = xps_video_action_recognition_train_response_instance.to_dict()
# create an instance of XPSVideoActionRecognitionTrainResponse from a dict
xps_video_action_recognition_train_response_from_dict = XPSVideoActionRecognitionTrainResponse.from_dict(xps_video_action_recognition_train_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


