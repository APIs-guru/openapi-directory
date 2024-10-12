# GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData

Per user usage data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** | User&#39;s username | [optional] 
**view_count** | **str** | Number of times the user has read data within the Tensorboard. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_read_tensorboard_usage_response_per_user_usage_data import GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData from a JSON string
google_cloud_aiplatform_v1beta1_read_tensorboard_usage_response_per_user_usage_data_instance = GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_read_tensorboard_usage_response_per_user_usage_data_dict = google_cloud_aiplatform_v1beta1_read_tensorboard_usage_response_per_user_usage_data_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData from a dict
google_cloud_aiplatform_v1beta1_read_tensorboard_usage_response_per_user_usage_data_from_dict = GoogleCloudAiplatformV1beta1ReadTensorboardUsageResponsePerUserUsageData.from_dict(google_cloud_aiplatform_v1beta1_read_tensorboard_usage_response_per_user_usage_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


