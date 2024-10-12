# GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval

A confidence interval is a range of possible values for the experiment objective you are trying to measure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_level** | **float** | The confidence level used to construct the interval, i.e. there is X% chance that the true value is within this interval. | [optional] 
**lower_bound** | **float** | Lower bound of the interval. | [optional] 
**ratio** | **float** | The percent change between an experiment metric&#39;s value and the value for its control. | [optional] 
**upper_bound** | **float** | Upper bound of the interval. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_experiment_result_confidence_interval import GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval from a JSON string
google_cloud_dialogflow_cx_v3_experiment_result_confidence_interval_instance = GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_experiment_result_confidence_interval_dict = google_cloud_dialogflow_cx_v3_experiment_result_confidence_interval_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval from a dict
google_cloud_dialogflow_cx_v3_experiment_result_confidence_interval_from_dict = GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval.from_dict(google_cloud_dialogflow_cx_v3_experiment_result_confidence_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


