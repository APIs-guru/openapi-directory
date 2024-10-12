# WritableUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_joined** | **datetime** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**groups** | **List[int]** | The groups this user belongs to. A user will get all permissions granted to each of their groups. | [optional] 
**id** | **int** |  | [optional] [readonly] 
**is_active** | **bool** | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. | [optional] 
**is_staff** | **bool** | Designates whether the user can log into this admin site. | [optional] 
**last_name** | **str** |  | [optional] 
**password** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**username** | **str** | Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. | 

## Example

```python
from openapi_client.models.writable_user import WritableUser

# TODO update the JSON string below
json = "{}"
# create an instance of WritableUser from a JSON string
writable_user_instance = WritableUser.from_json(json)
# print the JSON string representation of the object
print(WritableUser.to_json())

# convert the object into a dict
writable_user_dict = writable_user_instance.to_dict()
# create an instance of WritableUser from a dict
writable_user_from_dict = WritableUser.from_dict(writable_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


