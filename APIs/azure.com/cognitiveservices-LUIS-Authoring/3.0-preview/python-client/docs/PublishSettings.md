# PublishSettings

The application publish settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The application ID. | 
**sentiment_analysis** | **bool** | Setting sentiment analysis as true returns the sentiment of the input utterance along with the response | 
**speech** | **bool** | Enables speech priming in your app | 
**spell_checker** | **bool** | Enables spell checking of the utterance. | 

## Example

```python
from openapi_client.models.publish_settings import PublishSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PublishSettings from a JSON string
publish_settings_instance = PublishSettings.from_json(json)
# print the JSON string representation of the object
print(PublishSettings.to_json())

# convert the object into a dict
publish_settings_dict = publish_settings_instance.to_dict()
# create an instance of PublishSettings from a dict
publish_settings_from_dict = PublishSettings.from_dict(publish_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


