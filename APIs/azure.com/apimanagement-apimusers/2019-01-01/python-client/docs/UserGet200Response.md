# UserGet200Response

User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserListByService200ResponseValueInnerProperties**](UserListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_get200_response import UserGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserGet200Response from a JSON string
user_get200_response_instance = UserGet200Response.from_json(json)
# print the JSON string representation of the object
print(UserGet200Response.to_json())

# convert the object into a dict
user_get200_response_dict = user_get200_response_instance.to_dict()
# create an instance of UserGet200Response from a dict
user_get200_response_from_dict = UserGet200Response.from_dict(user_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


