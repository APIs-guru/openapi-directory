# UserAccessList

List of user permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** |  | [optional] 
**owner** | **str** | The email address of owner of the application. | [optional] 

## Example

```python
from openapi_client.models.user_access_list import UserAccessList

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccessList from a JSON string
user_access_list_instance = UserAccessList.from_json(json)
# print the JSON string representation of the object
print(UserAccessList.to_json())

# convert the object into a dict
user_access_list_dict = user_access_list_instance.to_dict()
# create an instance of UserAccessList from a dict
user_access_list_from_dict = UserAccessList.from_dict(user_access_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


