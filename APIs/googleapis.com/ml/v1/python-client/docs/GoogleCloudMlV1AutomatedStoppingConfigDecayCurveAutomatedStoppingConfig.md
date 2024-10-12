# GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_elapsed_time** | **bool** | If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_automated_stopping_config_decay_curve_automated_stopping_config import GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig from a JSON string
google_cloud_ml_v1_automated_stopping_config_decay_curve_automated_stopping_config_instance = GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_automated_stopping_config_decay_curve_automated_stopping_config_dict = google_cloud_ml_v1_automated_stopping_config_decay_curve_automated_stopping_config_instance.to_dict()
# create an instance of GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig from a dict
google_cloud_ml_v1_automated_stopping_config_decay_curve_automated_stopping_config_from_dict = GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig.from_dict(google_cloud_ml_v1_automated_stopping_config_decay_curve_automated_stopping_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


