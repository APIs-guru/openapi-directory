# UserMuteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Date/time of creation | [optional] 
**expires** | **datetime** | Date/time of mute expiration | [optional] 
**target** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**updated_at** | **datetime** | Date/time of the last update | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_mute_request import UserMuteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserMuteRequest from a JSON string
user_mute_request_instance = UserMuteRequest.from_json(json)
# print the JSON string representation of the object
print(UserMuteRequest.to_json())

# convert the object into a dict
user_mute_request_dict = user_mute_request_instance.to_dict()
# create an instance of UserMuteRequest from a dict
user_mute_request_from_dict = UserMuteRequest.from_dict(user_mute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


