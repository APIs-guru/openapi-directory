# EndpointGetUsersID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_id import EndpointGetUsersID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersID from a JSON string
endpoint_get_users_id_instance = EndpointGetUsersID.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersID.to_json())

# convert the object into a dict
endpoint_get_users_id_dict = endpoint_get_users_id_instance.to_dict()
# create an instance of EndpointGetUsersID from a dict
endpoint_get_users_id_from_dict = EndpointGetUsersID.from_dict(endpoint_get_users_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


