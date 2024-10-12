# GoogleCloudMlV1AutomatedStoppingConfig

Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decay_curve_stopping_config** | [**GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig**](GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig.md) |  | [optional] 
**median_automated_stopping_config** | [**GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig**](GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_automated_stopping_config import GoogleCloudMlV1AutomatedStoppingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1AutomatedStoppingConfig from a JSON string
google_cloud_ml_v1_automated_stopping_config_instance = GoogleCloudMlV1AutomatedStoppingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1AutomatedStoppingConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_automated_stopping_config_dict = google_cloud_ml_v1_automated_stopping_config_instance.to_dict()
# create an instance of GoogleCloudMlV1AutomatedStoppingConfig from a dict
google_cloud_ml_v1_automated_stopping_config_from_dict = GoogleCloudMlV1AutomatedStoppingConfig.from_dict(google_cloud_ml_v1_automated_stopping_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


