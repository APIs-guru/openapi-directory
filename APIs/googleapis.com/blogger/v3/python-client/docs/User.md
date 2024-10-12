# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** | Profile summary information. | [optional] 
**blogs** | [**UserBlogs**](UserBlogs.md) |  | [optional] 
**created** | **str** | The timestamp of when this profile was created, in seconds since epoch. | [optional] 
**display_name** | **str** | The display name. | [optional] 
**id** | **str** | The identifier for this User. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#user. | [optional] 
**locale** | [**UserLocale**](UserLocale.md) |  | [optional] 
**self_link** | **str** | The API REST URL to fetch this resource from. | [optional] 
**url** | **str** | The user&#39;s profile page. | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


