# GoogleCloudMlV1TrialParameter

A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**float_value** | **float** | Must be set if ParameterType is DOUBLE or DISCRETE. | [optional] 
**int_value** | **str** | Must be set if ParameterType is INTEGER | [optional] 
**parameter** | **str** | The name of the parameter. | [optional] 
**string_value** | **str** | Must be set if ParameterTypeis CATEGORICAL | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_trial_parameter import GoogleCloudMlV1TrialParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1TrialParameter from a JSON string
google_cloud_ml_v1_trial_parameter_instance = GoogleCloudMlV1TrialParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1TrialParameter.to_json())

# convert the object into a dict
google_cloud_ml_v1_trial_parameter_dict = google_cloud_ml_v1_trial_parameter_instance.to_dict()
# create an instance of GoogleCloudMlV1TrialParameter from a dict
google_cloud_ml_v1_trial_parameter_from_dict = GoogleCloudMlV1TrialParameter.from_dict(google_cloud_ml_v1_trial_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


