# XPSTextComponentModel

Component model. Next ID: 10

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_prediction_model_gcs_uri** | **str** | The Cloud Storage resource path to hold batch prediction model. | [optional] 
**online_prediction_model_gcs_uri** | **str** | The Cloud Storage resource path to hold online prediction model. | [optional] 
**partition** | **str** | The partition where the model is deployed. Populated by uCAIP BE as part of online PredictRequest. | [optional] 
**serving_artifact** | [**XPSModelArtifactItem**](XPSModelArtifactItem.md) |  | [optional] 
**servo_model_name** | **str** | The name of servo model. Populated by uCAIP BE as part of online PredictRequest. | [optional] 
**submodel_name** | **str** | The name of the trained NL submodel. | [optional] 
**submodel_type** | **str** | The type of trained NL submodel | [optional] 
**tf_runtime_version** | **str** | ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list | [optional] 
**version_number** | **str** | The servomatic model version number. Populated by uCAIP BE as part of online PredictRequest. | [optional] 

## Example

```python
from openapi_client.models.xps_text_component_model import XPSTextComponentModel

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTextComponentModel from a JSON string
xps_text_component_model_instance = XPSTextComponentModel.from_json(json)
# print the JSON string representation of the object
print(XPSTextComponentModel.to_json())

# convert the object into a dict
xps_text_component_model_dict = xps_text_component_model_instance.to_dict()
# create an instance of XPSTextComponentModel from a dict
xps_text_component_model_from_dict = XPSTextComponentModel.from_dict(xps_text_component_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


