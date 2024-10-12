# BanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banned_by** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**banned_by_id** | **str** | User ID who issued a ban | [optional] 
**id** | **str** | Channel ID to ban user in | [optional] 
**ip_ban** | **bool** | Whether to perform IP ban or not | [optional] 
**reason** | **str** | Ban reason | [optional] 
**shadow** | **bool** | Whether to perform shadow ban or not | [optional] 
**target_user_id** | **str** | ID of user to ban | 
**timeout** | **int** | Timeout of ban in minutes. User will be unbanned after this period of time | [optional] 
**type** | **str** | Channel type to ban user in | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ban_request import BanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BanRequest from a JSON string
ban_request_instance = BanRequest.from_json(json)
# print the JSON string representation of the object
print(BanRequest.to_json())

# convert the object into a dict
ban_request_dict = ban_request_instance.to_dict()
# create an instance of BanRequest from a dict
ban_request_from_dict = BanRequest.from_dict(ban_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


