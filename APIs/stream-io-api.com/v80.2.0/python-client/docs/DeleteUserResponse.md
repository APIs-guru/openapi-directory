# DeleteUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**task_id** | **str** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_user_response import DeleteUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteUserResponse from a JSON string
delete_user_response_instance = DeleteUserResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteUserResponse.to_json())

# convert the object into a dict
delete_user_response_dict = delete_user_response_instance.to_dict()
# create an instance of DeleteUserResponse from a dict
delete_user_response_from_dict = DeleteUserResponse.from_dict(delete_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


