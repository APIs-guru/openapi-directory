# UserAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_apps_visible** | **bool** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**provisioning_allowed** | **bool** |  | [optional] 
**roles** | [**List[UserRole]**](UserRole.md) |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_attributes import UserAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UserAttributes from a JSON string
user_attributes_instance = UserAttributes.from_json(json)
# print the JSON string representation of the object
print(UserAttributes.to_json())

# convert the object into a dict
user_attributes_dict = user_attributes_instance.to_dict()
# create an instance of UserAttributes from a dict
user_attributes_from_dict = UserAttributes.from_dict(user_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


