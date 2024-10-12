# Get2UsersByUsernameUsernameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**User**](User.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_by_username_username_response import Get2UsersByUsernameUsernameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersByUsernameUsernameResponse from a JSON string
get2_users_by_username_username_response_instance = Get2UsersByUsernameUsernameResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersByUsernameUsernameResponse.to_json())

# convert the object into a dict
get2_users_by_username_username_response_dict = get2_users_by_username_username_response_instance.to_dict()
# create an instance of Get2UsersByUsernameUsernameResponse from a dict
get2_users_by_username_username_response_from_dict = Get2UsersByUsernameUsernameResponse.from_dict(get2_users_by_username_username_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


