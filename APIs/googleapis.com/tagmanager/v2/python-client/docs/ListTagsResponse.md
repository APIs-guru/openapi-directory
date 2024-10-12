# ListTagsResponse

List Tags Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**tag** | [**List[Tag]**](Tag.md) | All GTM Tags of a GTM Container. | [optional] 

## Example

```python
from openapi_client.models.list_tags_response import ListTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagsResponse from a JSON string
list_tags_response_instance = ListTagsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTagsResponse.to_json())

# convert the object into a dict
list_tags_response_dict = list_tags_response_instance.to_dict()
# create an instance of ListTagsResponse from a dict
list_tags_response_from_dict = ListTagsResponse.from_dict(list_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


