# RestoreUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_ids** | **List[str]** |  | 

## Example

```python
from openapi_client.models.restore_users_request import RestoreUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreUsersRequest from a JSON string
restore_users_request_instance = RestoreUsersRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreUsersRequest.to_json())

# convert the object into a dict
restore_users_request_dict = restore_users_request_instance.to_dict()
# create an instance of RestoreUsersRequest from a dict
restore_users_request_from_dict = RestoreUsersRequest.from_dict(restore_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


