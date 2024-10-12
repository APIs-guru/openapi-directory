# GroupUserCreate200Response

User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupUserList200ResponseValueInnerProperties**](GroupUserList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group_user_create200_response import GroupUserCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUserCreate200Response from a JSON string
group_user_create200_response_instance = GroupUserCreate200Response.from_json(json)
# print the JSON string representation of the object
print(GroupUserCreate200Response.to_json())

# convert the object into a dict
group_user_create200_response_dict = group_user_create200_response_instance.to_dict()
# create an instance of GroupUserCreate200Response from a dict
group_user_create200_response_from_dict = GroupUserCreate200Response.from_dict(group_user_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


