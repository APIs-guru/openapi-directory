# UserListByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.user_list_by_service_default_response_details_inner import UserListByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserListByServiceDefaultResponseDetailsInner from a JSON string
user_list_by_service_default_response_details_inner_instance = UserListByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(UserListByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
user_list_by_service_default_response_details_inner_dict = user_list_by_service_default_response_details_inner_instance.to_dict()
# create an instance of UserListByServiceDefaultResponseDetailsInner from a dict
user_list_by_service_default_response_details_inner_from_dict = UserListByServiceDefaultResponseDetailsInner.from_dict(user_list_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


