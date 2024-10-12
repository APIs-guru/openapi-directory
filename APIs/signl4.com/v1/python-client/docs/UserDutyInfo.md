# UserDutyInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_status_change** | **datetime** |  | [optional] 
**on_duty** | **bool** |  | [optional] 
**on_manager_duty** | **bool** |  | [optional] 
**overdue** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.user_duty_info import UserDutyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserDutyInfo from a JSON string
user_duty_info_instance = UserDutyInfo.from_json(json)
# print the JSON string representation of the object
print(UserDutyInfo.to_json())

# convert the object into a dict
user_duty_info_dict = user_duty_info_instance.to_dict()
# create an instance of UserDutyInfo from a dict
user_duty_info_from_dict = UserDutyInfo.from_dict(user_duty_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


