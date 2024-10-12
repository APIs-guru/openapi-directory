# UserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_index** | **int** |  | [optional] 
**contact_addresses** | [**List[ContactAddressInfo]**](ContactAddressInfo.md) |  | [optional] 
**duty_info** | [**UserDutyInfo**](UserDutyInfo.md) |  | [optional] 
**id** | **str** |  | [optional] 
**is_deactivated** | **bool** |  | [optional] 
**is_invite** | **bool** |  | [optional] 
**mail** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**role_id** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**user_image_last_modified** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.user_info import UserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserInfo from a JSON string
user_info_instance = UserInfo.from_json(json)
# print the JSON string representation of the object
print(UserInfo.to_json())

# convert the object into a dict
user_info_dict = user_info_instance.to_dict()
# create an instance of UserInfo from a dict
user_info_from_dict = UserInfo.from_dict(user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


