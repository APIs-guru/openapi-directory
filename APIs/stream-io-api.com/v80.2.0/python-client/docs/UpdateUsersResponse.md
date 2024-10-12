# UpdateUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**users** | [**Dict[str, UserObject]**](UserObject.md) | Object containing users | 

## Example

```python
from openapi_client.models.update_users_response import UpdateUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUsersResponse from a JSON string
update_users_response_instance = UpdateUsersResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateUsersResponse.to_json())

# convert the object into a dict
update_users_response_dict = update_users_response_instance.to_dict()
# create an instance of UpdateUsersResponse from a dict
update_users_response_from_dict = UpdateUsersResponse.from_dict(update_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


