# GoogleCloudAiplatformV1ReadTensorboardUsageResponse

Response message for TensorboardService.ReadTensorboardUsage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_usage_data** | [**Dict[str, GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData]**](GoogleCloudAiplatformV1ReadTensorboardUsageResponsePerMonthUsageData.md) | Maps year-month (YYYYMM) string to per month usage data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_read_tensorboard_usage_response import GoogleCloudAiplatformV1ReadTensorboardUsageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ReadTensorboardUsageResponse from a JSON string
google_cloud_aiplatform_v1_read_tensorboard_usage_response_instance = GoogleCloudAiplatformV1ReadTensorboardUsageResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ReadTensorboardUsageResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_read_tensorboard_usage_response_dict = google_cloud_aiplatform_v1_read_tensorboard_usage_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ReadTensorboardUsageResponse from a dict
google_cloud_aiplatform_v1_read_tensorboard_usage_response_from_dict = GoogleCloudAiplatformV1ReadTensorboardUsageResponse.from_dict(google_cloud_aiplatform_v1_read_tensorboard_usage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


