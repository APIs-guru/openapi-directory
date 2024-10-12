# PhonePlaybackResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calling** | **bool** | True if the call is being made now | 
**number_valid** | **bool** | True if this a valid phone number | 

## Example

```python
from openapi_client.models.phone_playback_response import PhonePlaybackResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PhonePlaybackResponse from a JSON string
phone_playback_response_instance = PhonePlaybackResponse.from_json(json)
# print the JSON string representation of the object
print(PhonePlaybackResponse.to_json())

# convert the object into a dict
phone_playback_response_dict = phone_playback_response_instance.to_dict()
# create an instance of PhonePlaybackResponse from a dict
phone_playback_response_from_dict = PhonePlaybackResponse.from_dict(phone_playback_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


