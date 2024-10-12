# GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary

Summary statistics about the replayed log entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**difference_count** | **int** | The number of replayed log entries with a difference between baseline and simulated policies. | [optional] 
**error_count** | **int** | The number of log entries that could not be replayed. | [optional] 
**log_count** | **int** | The total number of log entries replayed. | [optional] 
**newest_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**oldest_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**unchanged_count** | **int** | The number of replayed log entries with no difference between baseline and simulated policies. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1beta1_replay_results_summary import GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary from a JSON string
google_cloud_policysimulator_v1beta1_replay_results_summary_instance = GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1beta1_replay_results_summary_dict = google_cloud_policysimulator_v1beta1_replay_results_summary_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary from a dict
google_cloud_policysimulator_v1beta1_replay_results_summary_from_dict = GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary.from_dict(google_cloud_policysimulator_v1beta1_replay_results_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


