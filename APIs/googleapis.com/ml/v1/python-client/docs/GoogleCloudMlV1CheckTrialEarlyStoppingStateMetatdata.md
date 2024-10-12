# GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata

This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time at which the operation was submitted. | [optional] 
**study** | **str** | The name of the study that the trial belongs to. | [optional] 
**trial** | **str** | The trial name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_check_trial_early_stopping_state_metatdata import GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata from a JSON string
google_cloud_ml_v1_check_trial_early_stopping_state_metatdata_instance = GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata.to_json())

# convert the object into a dict
google_cloud_ml_v1_check_trial_early_stopping_state_metatdata_dict = google_cloud_ml_v1_check_trial_early_stopping_state_metatdata_instance.to_dict()
# create an instance of GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata from a dict
google_cloud_ml_v1_check_trial_early_stopping_state_metatdata_from_dict = GoogleCloudMlV1CheckTrialEarlyStoppingStateMetatdata.from_dict(google_cloud_ml_v1_check_trial_early_stopping_state_metatdata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


