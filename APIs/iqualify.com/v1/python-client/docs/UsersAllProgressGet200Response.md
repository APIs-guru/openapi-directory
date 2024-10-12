# UsersAllProgressGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UsersAllProgressGet200ResponseData**](UsersAllProgressGet200ResponseData.md) |  | [optional] 
**top** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.users_all_progress_get200_response import UsersAllProgressGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UsersAllProgressGet200Response from a JSON string
users_all_progress_get200_response_instance = UsersAllProgressGet200Response.from_json(json)
# print the JSON string representation of the object
print(UsersAllProgressGet200Response.to_json())

# convert the object into a dict
users_all_progress_get200_response_dict = users_all_progress_get200_response_instance.to_dict()
# create an instance of UsersAllProgressGet200Response from a dict
users_all_progress_get200_response_from_dict = UsersAllProgressGet200Response.from_dict(users_all_progress_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


