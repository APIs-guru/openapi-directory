# GoogleCloudContactcenterinsightsV1alpha1SpeechConfig

Speech-to-Text configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**speech_recognizer** | **str** | The fully-qualified Speech Recognizer resource name. Format: &#x60;projects/{project_id}/locations/{location}/recognizer/{recognizer}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_speech_config import GoogleCloudContactcenterinsightsV1alpha1SpeechConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1SpeechConfig from a JSON string
google_cloud_contactcenterinsights_v1alpha1_speech_config_instance = GoogleCloudContactcenterinsightsV1alpha1SpeechConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1SpeechConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_speech_config_dict = google_cloud_contactcenterinsights_v1alpha1_speech_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1SpeechConfig from a dict
google_cloud_contactcenterinsights_v1alpha1_speech_config_from_dict = GoogleCloudContactcenterinsightsV1alpha1SpeechConfig.from_dict(google_cloud_contactcenterinsights_v1alpha1_speech_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


