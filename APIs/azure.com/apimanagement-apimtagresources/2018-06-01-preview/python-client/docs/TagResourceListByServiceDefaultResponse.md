# TagResourceListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TagResourceListByServiceDefaultResponseError**](TagResourceListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_resource_list_by_service_default_response import TagResourceListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceListByServiceDefaultResponse from a JSON string
tag_resource_list_by_service_default_response_instance = TagResourceListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TagResourceListByServiceDefaultResponse.to_json())

# convert the object into a dict
tag_resource_list_by_service_default_response_dict = tag_resource_list_by_service_default_response_instance.to_dict()
# create an instance of TagResourceListByServiceDefaultResponse from a dict
tag_resource_list_by_service_default_response_from_dict = TagResourceListByServiceDefaultResponse.from_dict(tag_resource_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


