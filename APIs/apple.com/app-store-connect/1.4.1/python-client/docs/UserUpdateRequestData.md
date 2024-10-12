# UserUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**UserUpdateRequestDataAttributes**](UserUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**UserInvitationCreateRequestDataRelationships**](UserInvitationCreateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.user_update_request_data import UserUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateRequestData from a JSON string
user_update_request_data_instance = UserUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(UserUpdateRequestData.to_json())

# convert the object into a dict
user_update_request_data_dict = user_update_request_data_instance.to_dict()
# create an instance of UserUpdateRequestData from a dict
user_update_request_data_from_dict = UserUpdateRequestData.from_dict(user_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


