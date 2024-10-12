# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_joined** | **datetime** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**groups** | [**List[NestedGroup]**](NestedGroup.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**is_active** | **bool** | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. | [optional] 
**is_staff** | **bool** | Designates whether the user can log into this admin site. | [optional] 
**last_name** | **str** |  | [optional] 
**password** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**username** | **str** | Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. | 

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


