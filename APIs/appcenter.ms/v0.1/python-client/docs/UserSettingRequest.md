# UserSettingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The setting value | 

## Example

```python
from openapi_client.models.user_setting_request import UserSettingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserSettingRequest from a JSON string
user_setting_request_instance = UserSettingRequest.from_json(json)
# print the JSON string representation of the object
print(UserSettingRequest.to_json())

# convert the object into a dict
user_setting_request_dict = user_setting_request_instance.to_dict()
# create an instance of UserSettingRequest from a dict
user_setting_request_from_dict = UserSettingRequest.from_dict(user_setting_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


