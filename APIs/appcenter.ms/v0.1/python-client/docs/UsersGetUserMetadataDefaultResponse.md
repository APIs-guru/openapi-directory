# UsersGetUserMetadataDefaultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**UsersGetUserMetadataDefaultResponseError**](UsersGetUserMetadataDefaultResponseError.md) |  | 

## Example

```python
from openapi_client.models.users_get_user_metadata_default_response import UsersGetUserMetadataDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersGetUserMetadataDefaultResponse from a JSON string
users_get_user_metadata_default_response_instance = UsersGetUserMetadataDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(UsersGetUserMetadataDefaultResponse.to_json())

# convert the object into a dict
users_get_user_metadata_default_response_dict = users_get_user_metadata_default_response_instance.to_dict()
# create an instance of UsersGetUserMetadataDefaultResponse from a dict
users_get_user_metadata_default_response_from_dict = UsersGetUserMetadataDefaultResponse.from_dict(users_get_user_metadata_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


