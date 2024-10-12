# GoogleCloudDialogflowCxV3ExperimentResult

The inference result which includes an objective metric to optimize and the confidence interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **str** | The last time the experiment&#39;s stats data was updated. Will have default value if stats have never been computed for this experiment. | [optional] 
**version_metrics** | [**List[GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics]**](GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics.md) | Version variants and metrics. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_experiment_result import GoogleCloudDialogflowCxV3ExperimentResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExperimentResult from a JSON string
google_cloud_dialogflow_cx_v3_experiment_result_instance = GoogleCloudDialogflowCxV3ExperimentResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExperimentResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_experiment_result_dict = google_cloud_dialogflow_cx_v3_experiment_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExperimentResult from a dict
google_cloud_dialogflow_cx_v3_experiment_result_from_dict = GoogleCloudDialogflowCxV3ExperimentResult.from_dict(google_cloud_dialogflow_cx_v3_experiment_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


