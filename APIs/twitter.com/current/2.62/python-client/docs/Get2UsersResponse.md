# Get2UsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_response import Get2UsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersResponse from a JSON string
get2_users_response_instance = Get2UsersResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersResponse.to_json())

# convert the object into a dict
get2_users_response_dict = get2_users_response_instance.to_dict()
# create an instance of Get2UsersResponse from a dict
get2_users_response_from_dict = Get2UsersResponse.from_dict(get2_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


