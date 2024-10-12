# GroupListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GroupListByServiceDefaultResponseError**](GroupListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_list_by_service_default_response import GroupListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupListByServiceDefaultResponse from a JSON string
group_list_by_service_default_response_instance = GroupListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(GroupListByServiceDefaultResponse.to_json())

# convert the object into a dict
group_list_by_service_default_response_dict = group_list_by_service_default_response_instance.to_dict()
# create an instance of GroupListByServiceDefaultResponse from a dict
group_list_by_service_default_response_from_dict = GroupListByServiceDefaultResponse.from_dict(group_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


