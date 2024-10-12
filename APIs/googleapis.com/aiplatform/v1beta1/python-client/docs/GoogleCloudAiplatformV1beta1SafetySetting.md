# GoogleCloudAiplatformV1beta1SafetySetting

Safety settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Required. Harm category. | [optional] 
**threshold** | **str** | Required. The harm block threshold. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_safety_setting import GoogleCloudAiplatformV1beta1SafetySetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SafetySetting from a JSON string
google_cloud_aiplatform_v1beta1_safety_setting_instance = GoogleCloudAiplatformV1beta1SafetySetting.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SafetySetting.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_safety_setting_dict = google_cloud_aiplatform_v1beta1_safety_setting_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SafetySetting from a dict
google_cloud_aiplatform_v1beta1_safety_setting_from_dict = GoogleCloudAiplatformV1beta1SafetySetting.from_dict(google_cloud_aiplatform_v1beta1_safety_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


