# GoogleCloudAiplatformV1beta1DestinationFeatureSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_field** | **str** | Specify the field name in the export destination. If not specified, Feature ID is used. | [optional] 
**feature_id** | **str** | Required. The ID of the Feature to apply the setting to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_destination_feature_setting import GoogleCloudAiplatformV1beta1DestinationFeatureSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DestinationFeatureSetting from a JSON string
google_cloud_aiplatform_v1beta1_destination_feature_setting_instance = GoogleCloudAiplatformV1beta1DestinationFeatureSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DestinationFeatureSetting.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_destination_feature_setting_dict = google_cloud_aiplatform_v1beta1_destination_feature_setting_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DestinationFeatureSetting from a dict
google_cloud_aiplatform_v1beta1_destination_feature_setting_from_dict = GoogleCloudAiplatformV1beta1DestinationFeatureSetting.from_dict(google_cloud_aiplatform_v1beta1_destination_feature_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


