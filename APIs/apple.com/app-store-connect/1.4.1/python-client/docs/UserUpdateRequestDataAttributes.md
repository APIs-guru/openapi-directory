# UserUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_apps_visible** | **bool** |  | [optional] 
**provisioning_allowed** | **bool** |  | [optional] 
**roles** | [**List[UserRole]**](UserRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_update_request_data_attributes import UserUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateRequestDataAttributes from a JSON string
user_update_request_data_attributes_instance = UserUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UserUpdateRequestDataAttributes.to_json())

# convert the object into a dict
user_update_request_data_attributes_dict = user_update_request_data_attributes_instance.to_dict()
# create an instance of UserUpdateRequestDataAttributes from a dict
user_update_request_data_attributes_from_dict = UserUpdateRequestDataAttributes.from_dict(user_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


