# UsersTokensList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Token]**](Token.md) |  | 

## Example

```python
from openapi_client.models.users_tokens_list200_response import UsersTokensList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UsersTokensList200Response from a JSON string
users_tokens_list200_response_instance = UsersTokensList200Response.from_json(json)
# print the JSON string representation of the object
print(UsersTokensList200Response.to_json())

# convert the object into a dict
users_tokens_list200_response_dict = users_tokens_list200_response_instance.to_dict()
# create an instance of UsersTokensList200Response from a dict
users_tokens_list200_response_from_dict = UsersTokensList200Response.from_dict(users_tokens_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


