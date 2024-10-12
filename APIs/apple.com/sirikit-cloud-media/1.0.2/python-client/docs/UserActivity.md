# UserActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_type** | **str** |  | 
**persistent_identifier** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**user_info** | **object** |  | [optional] 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.user_activity import UserActivity

# TODO update the JSON string below
json = "{}"
# create an instance of UserActivity from a JSON string
user_activity_instance = UserActivity.from_json(json)
# print the JSON string representation of the object
print(UserActivity.to_json())

# convert the object into a dict
user_activity_dict = user_activity_instance.to_dict()
# create an instance of UserActivity from a dict
user_activity_from_dict = UserActivity.from_dict(user_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


