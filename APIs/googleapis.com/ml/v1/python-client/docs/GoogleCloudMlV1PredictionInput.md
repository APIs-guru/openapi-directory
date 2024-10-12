# GoogleCloudMlV1PredictionInput

Represents input parameters for a prediction job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **str** | Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter. | [optional] 
**data_format** | **str** | Required. The format of the input data files. | [optional] 
**input_paths** | **List[str]** | Required. The Cloud Storage location of the input data files. May contain wildcards. | [optional] 
**max_worker_count** | **str** | Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified. | [optional] 
**model_name** | **str** | Use this field if you want to use the default version for the specified model. The string must use the following format: &#x60;\&quot;projects/YOUR_PROJECT/models/YOUR_MODEL\&quot;&#x60; | [optional] 
**output_data_format** | **str** | Optional. Format of the output data files, defaults to JSON. | [optional] 
**output_path** | **str** | Required. The output Google Cloud Storage location. | [optional] 
**region** | **str** | Required. The Google Compute Engine region to run the prediction job in. See the available regions for AI Platform services. | [optional] 
**runtime_version** | **str** | Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri. | [optional] 
**signature_name** | **str** | Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures. Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is \&quot;serving_default\&quot;. | [optional] 
**uri** | **str** | Use this field if you want to specify a Google Cloud Storage path for the model to use. | [optional] 
**version_name** | **str** | Use this field if you want to specify a version of the model to use. The string is formatted the same way as &#x60;model_version&#x60;, with the addition of the version information: &#x60;\&quot;projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION\&quot;&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_prediction_input import GoogleCloudMlV1PredictionInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1PredictionInput from a JSON string
google_cloud_ml_v1_prediction_input_instance = GoogleCloudMlV1PredictionInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1PredictionInput.to_json())

# convert the object into a dict
google_cloud_ml_v1_prediction_input_dict = google_cloud_ml_v1_prediction_input_instance.to_dict()
# create an instance of GoogleCloudMlV1PredictionInput from a dict
google_cloud_ml_v1_prediction_input_from_dict = GoogleCloudMlV1PredictionInput.from_dict(google_cloud_ml_v1_prediction_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


