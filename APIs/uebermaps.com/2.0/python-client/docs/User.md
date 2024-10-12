# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** |  | [optional] 
**counts** | [**UserCounts**](UserCounts.md) |  | [optional] 
**header_picture** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**location** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**picture_url** | **str** |  | [optional] 
**screen_name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

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


