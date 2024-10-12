# GroupGet200Response

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupListByService200ResponseValueInnerProperties**](GroupListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.group_get200_response import GroupGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupGet200Response from a JSON string
group_get200_response_instance = GroupGet200Response.from_json(json)
# print the JSON string representation of the object
print(GroupGet200Response.to_json())

# convert the object into a dict
group_get200_response_dict = group_get200_response_instance.to_dict()
# create an instance of GroupGet200Response from a dict
group_get200_response_from_dict = GroupGet200Response.from_dict(group_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


