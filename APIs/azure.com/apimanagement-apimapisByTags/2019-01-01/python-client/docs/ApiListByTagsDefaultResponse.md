# ApiListByTagsDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ApiListByTagsDefaultResponseError**](ApiListByTagsDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_list_by_tags_default_response import ApiListByTagsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiListByTagsDefaultResponse from a JSON string
api_list_by_tags_default_response_instance = ApiListByTagsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ApiListByTagsDefaultResponse.to_json())

# convert the object into a dict
api_list_by_tags_default_response_dict = api_list_by_tags_default_response_instance.to_dict()
# create an instance of ApiListByTagsDefaultResponse from a dict
api_list_by_tags_default_response_from_dict = ApiListByTagsDefaultResponse.from_dict(api_list_by_tags_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


