# GoogleCloudMlV1PredictionOutput

Represents results of a prediction job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **str** | The number of data instances which resulted in errors. | [optional] 
**node_hours** | **float** | Node hours used by the batch prediction job. | [optional] 
**output_path** | **str** | The output Google Cloud Storage location provided at the job creation time. | [optional] 
**prediction_count** | **str** | The number of generated predictions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_prediction_output import GoogleCloudMlV1PredictionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1PredictionOutput from a JSON string
google_cloud_ml_v1_prediction_output_instance = GoogleCloudMlV1PredictionOutput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1PredictionOutput.to_json())

# convert the object into a dict
google_cloud_ml_v1_prediction_output_dict = google_cloud_ml_v1_prediction_output_instance.to_dict()
# create an instance of GoogleCloudMlV1PredictionOutput from a dict
google_cloud_ml_v1_prediction_output_from_dict = GoogleCloudMlV1PredictionOutput.from_dict(google_cloud_ml_v1_prediction_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


