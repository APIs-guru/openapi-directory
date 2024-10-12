# UserChannel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **int** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.user_channel import UserChannel

# TODO update the JSON string below
json = "{}"
# create an instance of UserChannel from a JSON string
user_channel_instance = UserChannel.from_json(json)
# print the JSON string representation of the object
print(UserChannel.to_json())

# convert the object into a dict
user_channel_dict = user_channel_instance.to_dict()
# create an instance of UserChannel from a dict
user_channel_from_dict = UserChannel.from_dict(user_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


