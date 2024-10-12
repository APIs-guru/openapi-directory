# UserSettingResponse

A user's setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketing_opt_in** | **str** | The marketing opt-in setting | [optional] 

## Example

```python
from openapi_client.models.user_setting_response import UserSettingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserSettingResponse from a JSON string
user_setting_response_instance = UserSettingResponse.from_json(json)
# print the JSON string representation of the object
print(UserSettingResponse.to_json())

# convert the object into a dict
user_setting_response_dict = user_setting_response_instance.to_dict()
# create an instance of UserSettingResponse from a dict
user_setting_response_from_dict = UserSettingResponse.from_dict(user_setting_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


