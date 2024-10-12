# Get2UsersIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**User**](User.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_id_response import Get2UsersIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersIdResponse from a JSON string
get2_users_id_response_instance = Get2UsersIdResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersIdResponse.to_json())

# convert the object into a dict
get2_users_id_response_dict = get2_users_id_response_instance.to_dict()
# create an instance of Get2UsersIdResponse from a dict
get2_users_id_response_from_dict = Get2UsersIdResponse.from_dict(get2_users_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


