# GoogleCloudMlV1BuiltInAlgorithmOutput

Represents output related to a built-in algorithm Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**framework** | **str** | Framework on which the built-in algorithm was trained. | [optional] 
**model_path** | **str** | The Cloud Storage path to the &#x60;model/&#x60; directory where the training job saves the trained model. Only set for successful jobs that don&#39;t use hyperparameter tuning. | [optional] 
**python_version** | **str** | Python version on which the built-in algorithm was trained. | [optional] 
**runtime_version** | **str** | AI Platform runtime version on which the built-in algorithm was trained. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_built_in_algorithm_output import GoogleCloudMlV1BuiltInAlgorithmOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1BuiltInAlgorithmOutput from a JSON string
google_cloud_ml_v1_built_in_algorithm_output_instance = GoogleCloudMlV1BuiltInAlgorithmOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1BuiltInAlgorithmOutput.to_json())

# convert the object into a dict
google_cloud_ml_v1_built_in_algorithm_output_dict = google_cloud_ml_v1_built_in_algorithm_output_instance.to_dict()
# create an instance of GoogleCloudMlV1BuiltInAlgorithmOutput from a dict
google_cloud_ml_v1_built_in_algorithm_output_from_dict = GoogleCloudMlV1BuiltInAlgorithmOutput.from_dict(google_cloud_ml_v1_built_in_algorithm_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


