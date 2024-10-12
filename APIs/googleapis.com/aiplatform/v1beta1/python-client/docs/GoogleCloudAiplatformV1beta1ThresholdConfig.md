# GoogleCloudAiplatformV1beta1ThresholdConfig

The config for feature monitoring threshold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Specify a threshold value that can trigger the alert. If this threshold config is for feature distribution distance: 1. For categorical feature, the distribution distance is calculated by L-inifinity norm. 2. For numerical feature, the distribution distance is calculated by Jensen–Shannon divergence. Each feature must have a non-zero threshold if they need to be monitored. Otherwise no alert will be triggered for that feature. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_threshold_config import GoogleCloudAiplatformV1beta1ThresholdConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ThresholdConfig from a JSON string
google_cloud_aiplatform_v1beta1_threshold_config_instance = GoogleCloudAiplatformV1beta1ThresholdConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ThresholdConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_threshold_config_dict = google_cloud_aiplatform_v1beta1_threshold_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ThresholdConfig from a dict
google_cloud_aiplatform_v1beta1_threshold_config_from_dict = GoogleCloudAiplatformV1beta1ThresholdConfig.from_dict(google_cloud_aiplatform_v1beta1_threshold_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


