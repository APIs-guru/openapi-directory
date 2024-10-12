# APIMethodUsersGetPresence

Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_away** | **bool** |  | [optional] 
**connection_count** | **int** |  | [optional] 
**last_activity** | **int** |  | [optional] 
**manual_away** | **bool** |  | [optional] 
**ok** | **bool** |  | 
**online** | **bool** |  | [optional] 
**presence** | **str** |  | 

## Example

```python
from openapi_client.models.api_method_users_get_presence import APIMethodUsersGetPresence

# TODO update the JSON string below
json = "{}"
# create an instance of APIMethodUsersGetPresence from a JSON string
api_method_users_get_presence_instance = APIMethodUsersGetPresence.from_json(json)
# print the JSON string representation of the object
print(APIMethodUsersGetPresence.to_json())

# convert the object into a dict
api_method_users_get_presence_dict = api_method_users_get_presence_instance.to_dict()
# create an instance of APIMethodUsersGetPresence from a dict
api_method_users_get_presence_from_dict = APIMethodUsersGetPresence.from_dict(api_method_users_get_presence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


