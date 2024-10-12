# TfLiteModel

Information that is specific to TfLite models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automl_model** | **str** | The AutoML model id referencing a model you created with the AutoML API. The name should have format &#39;projects//locations//models/&#39; (This is the model resource name returned from the AutoML API) | [optional] 
**gcs_tflite_uri** | **str** | The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file. | [optional] 
**size_bytes** | **str** | Output only. The size of the TFLite model | [optional] [readonly] 

## Example

```python
from openapi_client.models.tf_lite_model import TfLiteModel

# TODO update the JSON string below
json = "{}"
# create an instance of TfLiteModel from a JSON string
tf_lite_model_instance = TfLiteModel.from_json(json)
# print the JSON string representation of the object
print(TfLiteModel.to_json())

# convert the object into a dict
tf_lite_model_dict = tf_lite_model_instance.to_dict()
# create an instance of TfLiteModel from a dict
tf_lite_model_from_dict = TfLiteModel.from_dict(tf_lite_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


