# CreateUserInGroupRequestProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**login** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_user_in_group_request_profile import CreateUserInGroupRequestProfile

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUserInGroupRequestProfile from a JSON string
create_user_in_group_request_profile_instance = CreateUserInGroupRequestProfile.from_json(json)
# print the JSON string representation of the object
print(CreateUserInGroupRequestProfile.to_json())

# convert the object into a dict
create_user_in_group_request_profile_dict = create_user_in_group_request_profile_instance.to_dict()
# create an instance of CreateUserInGroupRequestProfile from a dict
create_user_in_group_request_profile_from_dict = CreateUserInGroupRequestProfile.from_dict(create_user_in_group_request_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


