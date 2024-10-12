# GroupGetDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GroupGetDefaultResponseError**](GroupGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_get_default_response import GroupGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupGetDefaultResponse from a JSON string
group_get_default_response_instance = GroupGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(GroupGetDefaultResponse.to_json())

# convert the object into a dict
group_get_default_response_dict = group_get_default_response_instance.to_dict()
# create an instance of GroupGetDefaultResponse from a dict
group_get_default_response_from_dict = GroupGetDefaultResponse.from_dict(group_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


