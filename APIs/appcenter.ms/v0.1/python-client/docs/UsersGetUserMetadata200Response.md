# UsersGetUserMetadata200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **object** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.users_get_user_metadata200_response import UsersGetUserMetadata200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UsersGetUserMetadata200Response from a JSON string
users_get_user_metadata200_response_instance = UsersGetUserMetadata200Response.from_json(json)
# print the JSON string representation of the object
print(UsersGetUserMetadata200Response.to_json())

# convert the object into a dict
users_get_user_metadata200_response_dict = users_get_user_metadata200_response_instance.to_dict()
# create an instance of UsersGetUserMetadata200Response from a dict
users_get_user_metadata200_response_from_dict = UsersGetUserMetadata200Response.from_dict(users_get_user_metadata200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


