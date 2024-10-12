# UsersInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backlog** | **int** |  | [optional] 
**created_at** | **str** |  | [optional] 
**hourly_quota** | **int** |  | [optional] 
**public_id** | **str** |  | [optional] 
**reputation** | **int** |  | [optional] 
**stats** | [**UsersInfoResponseStats**](UsersInfoResponseStats.md) |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.users_info_response import UsersInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInfoResponse from a JSON string
users_info_response_instance = UsersInfoResponse.from_json(json)
# print the JSON string representation of the object
print(UsersInfoResponse.to_json())

# convert the object into a dict
users_info_response_dict = users_info_response_instance.to_dict()
# create an instance of UsersInfoResponse from a dict
users_info_response_from_dict = UsersInfoResponse.from_dict(users_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


