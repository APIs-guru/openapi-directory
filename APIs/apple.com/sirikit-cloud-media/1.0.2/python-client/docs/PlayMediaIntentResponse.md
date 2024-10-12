# PlayMediaIntentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | 
**code** | [**PlayMediaIntentResponseCode**](PlayMediaIntentResponseCode.md) |  | 

## Example

```python
from openapi_client.models.play_media_intent_response import PlayMediaIntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayMediaIntentResponse from a JSON string
play_media_intent_response_instance = PlayMediaIntentResponse.from_json(json)
# print the JSON string representation of the object
print(PlayMediaIntentResponse.to_json())

# convert the object into a dict
play_media_intent_response_dict = play_media_intent_response_instance.to_dict()
# create an instance of PlayMediaIntentResponse from a dict
play_media_intent_response_from_dict = PlayMediaIntentResponse.from_dict(play_media_intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


