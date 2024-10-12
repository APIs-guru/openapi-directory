# GoogleCloudMlV1HyperparameterOutputHyperparameterMetric

An observed value of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objective_value** | **float** | The objective value at this training step. | [optional] 
**training_step** | **str** | The global training step for this metric. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_hyperparameter_output_hyperparameter_metric import GoogleCloudMlV1HyperparameterOutputHyperparameterMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1HyperparameterOutputHyperparameterMetric from a JSON string
google_cloud_ml_v1_hyperparameter_output_hyperparameter_metric_instance = GoogleCloudMlV1HyperparameterOutputHyperparameterMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1HyperparameterOutputHyperparameterMetric.to_json())

# convert the object into a dict
google_cloud_ml_v1_hyperparameter_output_hyperparameter_metric_dict = google_cloud_ml_v1_hyperparameter_output_hyperparameter_metric_instance.to_dict()
# create an instance of GoogleCloudMlV1HyperparameterOutputHyperparameterMetric from a dict
google_cloud_ml_v1_hyperparameter_output_hyperparameter_metric_from_dict = GoogleCloudMlV1HyperparameterOutputHyperparameterMetric.from_dict(google_cloud_ml_v1_hyperparameter_output_hyperparameter_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


