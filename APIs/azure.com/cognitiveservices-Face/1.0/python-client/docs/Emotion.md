# Emotion

Properties describing facial emotion in form of confidence ranging from 0 to 1.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anger** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**contempt** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**disgust** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**fear** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**happiness** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**neutral** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**sadness** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**surprise** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 

## Example

```python
from openapi_client.models.emotion import Emotion

# TODO update the JSON string below
json = "{}"
# create an instance of Emotion from a JSON string
emotion_instance = Emotion.from_json(json)
# print the JSON string representation of the object
print(Emotion.to_json())

# convert the object into a dict
emotion_dict = emotion_instance.to_dict()
# create an instance of Emotion from a dict
emotion_from_dict = Emotion.from_dict(emotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


