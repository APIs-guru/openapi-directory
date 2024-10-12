# GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig

The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_elapsed_time** | **bool** | If true, the median automated stopping rule applies to measurement.use_elapsed_time, which means the elapsed_time field of the current trial&#39;s latest measurement is used to compute the median objective value for each completed trial. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_automated_stopping_config_median_automated_stopping_config import GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig from a JSON string
google_cloud_ml_v1_automated_stopping_config_median_automated_stopping_config_instance = GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_automated_stopping_config_median_automated_stopping_config_dict = google_cloud_ml_v1_automated_stopping_config_median_automated_stopping_config_instance.to_dict()
# create an instance of GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig from a dict
google_cloud_ml_v1_automated_stopping_config_median_automated_stopping_config_from_dict = GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig.from_dict(google_cloud_ml_v1_automated_stopping_config_median_automated_stopping_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


