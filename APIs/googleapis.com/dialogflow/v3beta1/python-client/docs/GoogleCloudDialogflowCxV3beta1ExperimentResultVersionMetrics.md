# GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics

Version variant and associated metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[GoogleCloudDialogflowCxV3beta1ExperimentResultMetric]**](GoogleCloudDialogflowCxV3beta1ExperimentResultMetric.md) | The metrics and corresponding confidence intervals in the inference result. | [optional] 
**session_count** | **int** | Number of sessions that were allocated to this version. | [optional] 
**version** | **str** | The name of the flow Version. Format: &#x60;projects//locations//agents//flows//versions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_experiment_result_version_metrics import GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics from a JSON string
google_cloud_dialogflow_cx_v3beta1_experiment_result_version_metrics_instance = GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_experiment_result_version_metrics_dict = google_cloud_dialogflow_cx_v3beta1_experiment_result_version_metrics_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics from a dict
google_cloud_dialogflow_cx_v3beta1_experiment_result_version_metrics_from_dict = GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics.from_dict(google_cloud_dialogflow_cx_v3beta1_experiment_result_version_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


