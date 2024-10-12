# GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData

Per month usage data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_usage_data** | [**List[GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerUserUsageData]**](GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerUserUsageData.md) | Usage data for each user in the given month. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_tensorboard_usage_response_per_month_usage_data import GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData from a JSON string
google_cloud_aiplatform_v1_read_tensorboard_usage_response_per_month_usage_data_instance = GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_tensorboard_usage_response_per_month_usage_data_dict = google_cloud_aiplatform_v1_read_tensorboard_usage_response_per_month_usage_data_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData from a dict
google_cloud_aiplatform_v1_read_tensorboard_usage_response_per_month_usage_data_from_dict = GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData.from_dict(google_cloud_aiplatform_v1_read_tensorboard_usage_response_per_month_usage_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


