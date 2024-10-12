# GroupListByService200Response

Paged Group list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[GroupListByService200ResponseValueInner]**](GroupListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.group_list_by_service200_response import GroupListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupListByService200Response from a JSON string
group_list_by_service200_response_instance = GroupListByService200Response.from_json(json)
# print the JSON string representation of the object
print(GroupListByService200Response.to_json())

# convert the object into a dict
group_list_by_service200_response_dict = group_list_by_service200_response_instance.to_dict()
# create an instance of GroupListByService200Response from a dict
group_list_by_service200_response_from_dict = GroupListByService200Response.from_dict(group_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


