# DeactivateUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.deactivate_users_response import DeactivateUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateUsersResponse from a JSON string
deactivate_users_response_instance = DeactivateUsersResponse.from_json(json)
# print the JSON string representation of the object
print(DeactivateUsersResponse.to_json())

# convert the object into a dict
deactivate_users_response_dict = deactivate_users_response_instance.to_dict()
# create an instance of DeactivateUsersResponse from a dict
deactivate_users_response_from_dict = DeactivateUsersResponse.from_dict(deactivate_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


