# ContentCategoriesListResponse

Content Category List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_categories** | [**List[ContentCategory]**](ContentCategory.md) | Content category collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#contentCategoriesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.content_categories_list_response import ContentCategoriesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContentCategoriesListResponse from a JSON string
content_categories_list_response_instance = ContentCategoriesListResponse.from_json(json)
# print the JSON string representation of the object
print(ContentCategoriesListResponse.to_json())

# convert the object into a dict
content_categories_list_response_dict = content_categories_list_response_instance.to_dict()
# create an instance of ContentCategoriesListResponse from a dict
content_categories_list_response_from_dict = ContentCategoriesListResponse.from_dict(content_categories_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


