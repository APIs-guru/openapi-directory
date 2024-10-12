# TagListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TagListByServiceDefaultResponseError**](TagListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_list_by_service_default_response import TagListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TagListByServiceDefaultResponse from a JSON string
tag_list_by_service_default_response_instance = TagListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TagListByServiceDefaultResponse.to_json())

# convert the object into a dict
tag_list_by_service_default_response_dict = tag_list_by_service_default_response_instance.to_dict()
# create an instance of TagListByServiceDefaultResponse from a dict
tag_list_by_service_default_response_from_dict = TagListByServiceDefaultResponse.from_dict(tag_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


