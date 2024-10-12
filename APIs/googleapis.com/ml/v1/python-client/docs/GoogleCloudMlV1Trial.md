# GoogleCloudMlV1Trial

A message representing a trial.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Output only. The identifier of the client that originally requested this trial. | [optional] [readonly] 
**end_time** | **str** | Output only. Time at which the trial&#39;s status changed to COMPLETED. | [optional] [readonly] 
**final_measurement** | [**GoogleCloudMlV1Measurement**](GoogleCloudMlV1Measurement.md) |  | [optional] 
**infeasible_reason** | **str** | Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true. | [optional] [readonly] 
**measurements** | [**List[GoogleCloudMlV1Measurement]**](GoogleCloudMlV1Measurement.md) | A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations. | [optional] 
**name** | **str** | Output only. Name of the trial assigned by the service. | [optional] [readonly] 
**parameters** | [**List[GoogleCloudMlV1TrialParameter]**](GoogleCloudMlV1TrialParameter.md) | The parameters of the trial. | [optional] 
**start_time** | **str** | Output only. Time at which the trial was started. | [optional] [readonly] 
**state** | **str** | The detailed state of a trial. | [optional] 
**trial_infeasible** | **bool** | Output only. If true, the parameters in this trial are not attempted again. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_trial import GoogleCloudMlV1Trial

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Trial from a JSON string
google_cloud_ml_v1_trial_instance = GoogleCloudMlV1Trial.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Trial.to_json())

# convert the object into a dict
google_cloud_ml_v1_trial_dict = google_cloud_ml_v1_trial_instance.to_dict()
# create an instance of GoogleCloudMlV1Trial from a dict
google_cloud_ml_v1_trial_from_dict = GoogleCloudMlV1Trial.from_dict(google_cloud_ml_v1_trial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


