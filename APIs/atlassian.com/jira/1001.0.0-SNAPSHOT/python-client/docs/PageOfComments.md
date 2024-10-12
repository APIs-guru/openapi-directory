# PageOfComments

A page of comments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**List[Comment]**](Comment.md) | The list of comments. | [optional] [readonly] 
**max_results** | **int** | The maximum number of items that could be returned. | [optional] [readonly] 
**start_at** | **int** | The index of the first item returned. | [optional] [readonly] 
**total** | **int** | The number of items returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.page_of_comments import PageOfComments

# TODO update the JSON string below
json = "{}"
# create an instance of PageOfComments from a JSON string
page_of_comments_instance = PageOfComments.from_json(json)
# print the JSON string representation of the object
print(PageOfComments.to_json())

# convert the object into a dict
page_of_comments_dict = page_of_comments_instance.to_dict()
# create an instance of PageOfComments from a dict
page_of_comments_from_dict = PageOfComments.from_dict(page_of_comments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


