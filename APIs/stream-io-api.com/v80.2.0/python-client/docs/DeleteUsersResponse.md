# DeleteUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.delete_users_response import DeleteUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteUsersResponse from a JSON string
delete_users_response_instance = DeleteUsersResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteUsersResponse.to_json())

# convert the object into a dict
delete_users_response_dict = delete_users_response_instance.to_dict()
# create an instance of DeleteUsersResponse from a dict
delete_users_response_from_dict = DeleteUsersResponse.from_dict(delete_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


