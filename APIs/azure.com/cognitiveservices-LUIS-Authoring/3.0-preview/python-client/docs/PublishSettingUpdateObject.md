# PublishSettingUpdateObject

Object model for updating an application's publish settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentiment_analysis** | **bool** | Setting sentiment analysis as true returns the Sentiment of the input utterance along with the response | [optional] 
**speech** | **bool** | Setting speech as public enables speech priming in your app | [optional] 
**spell_checker** | **bool** | Setting spell checker as public enables spell checking the input utterance. | [optional] 

## Example

```python
from openapi_client.models.publish_setting_update_object import PublishSettingUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PublishSettingUpdateObject from a JSON string
publish_setting_update_object_instance = PublishSettingUpdateObject.from_json(json)
# print the JSON string representation of the object
print(PublishSettingUpdateObject.to_json())

# convert the object into a dict
publish_setting_update_object_dict = publish_setting_update_object_instance.to_dict()
# create an instance of PublishSettingUpdateObject from a dict
publish_setting_update_object_from_dict = PublishSettingUpdateObject.from_dict(publish_setting_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


