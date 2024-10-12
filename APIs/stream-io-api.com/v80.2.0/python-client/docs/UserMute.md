# UserMute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Date/time of creation | 
**expires** | **datetime** | Date/time of mute expiration | [optional] 
**target** | [**UserObject**](UserObject.md) |  | [optional] 
**updated_at** | **datetime** | Date/time of the last update | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_mute import UserMute

# TODO update the JSON string below
json = "{}"
# create an instance of UserMute from a JSON string
user_mute_instance = UserMute.from_json(json)
# print the JSON string representation of the object
print(UserMute.to_json())

# convert the object into a dict
user_mute_dict = user_mute_instance.to_dict()
# create an instance of UserMute from a dict
user_mute_from_dict = UserMute.from_dict(user_mute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


