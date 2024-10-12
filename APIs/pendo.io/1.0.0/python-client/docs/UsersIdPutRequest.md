# UsersIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**external_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**permission_group_id** | **float** | only valid for users with role &#39;vendorUser&#39; | [optional] 

## Example

```python
from openapi_client.models.users_id_put_request import UsersIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UsersIdPutRequest from a JSON string
users_id_put_request_instance = UsersIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(UsersIdPutRequest.to_json())

# convert the object into a dict
users_id_put_request_dict = users_id_put_request_instance.to_dict()
# create an instance of UsersIdPutRequest from a dict
users_id_put_request_from_dict = UsersIdPutRequest.from_dict(users_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


