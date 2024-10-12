# MuteUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**mute** | [**UserMute**](UserMute.md) |  | [optional] 
**mutes** | [**List[UserMute]**](UserMute.md) | Object with mutes (if multiple users were muted) | [optional] 
**own_user** | [**OwnUser**](OwnUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.mute_user_response import MuteUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MuteUserResponse from a JSON string
mute_user_response_instance = MuteUserResponse.from_json(json)
# print the JSON string representation of the object
print(MuteUserResponse.to_json())

# convert the object into a dict
mute_user_response_dict = mute_user_response_instance.to_dict()
# create an instance of MuteUserResponse from a dict
mute_user_response_from_dict = MuteUserResponse.from_dict(mute_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


