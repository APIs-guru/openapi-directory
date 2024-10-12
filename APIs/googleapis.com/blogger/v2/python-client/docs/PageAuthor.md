# PageAuthor

The author of this Page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name. | [optional] 
**id** | **str** | The identifier of the creator. | [optional] 
**image** | [**CommentAuthorImage**](CommentAuthorImage.md) |  | [optional] 
**url** | **str** | The URL of the creator&#39;s Profile page. | [optional] 

## Example

```python
from openapi_client.models.page_author import PageAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of PageAuthor from a JSON string
page_author_instance = PageAuthor.from_json(json)
# print the JSON string representation of the object
print(PageAuthor.to_json())

# convert the object into a dict
page_author_dict = page_author_instance.to_dict()
# create an instance of PageAuthor from a dict
page_author_from_dict = PageAuthor.from_dict(page_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


