# MuteUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_user_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.mute_user_request import MuteUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MuteUserRequest from a JSON string
mute_user_request_instance = MuteUserRequest.from_json(json)
# print the JSON string representation of the object
print(MuteUserRequest.to_json())

# convert the object into a dict
mute_user_request_dict = mute_user_request_instance.to_dict()
# create an instance of MuteUserRequest from a dict
mute_user_request_from_dict = MuteUserRequest.from_dict(mute_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


