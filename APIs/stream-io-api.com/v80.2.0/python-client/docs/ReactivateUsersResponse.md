# ReactivateUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.reactivate_users_response import ReactivateUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReactivateUsersResponse from a JSON string
reactivate_users_response_instance = ReactivateUsersResponse.from_json(json)
# print the JSON string representation of the object
print(ReactivateUsersResponse.to_json())

# convert the object into a dict
reactivate_users_response_dict = reactivate_users_response_instance.to_dict()
# create an instance of ReactivateUsersResponse from a dict
reactivate_users_response_from_dict = ReactivateUsersResponse.from_dict(reactivate_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


