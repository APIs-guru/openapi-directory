# CommentsSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Comments | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.comments_sort import CommentsSort

# TODO update the JSON string below
json = "{}"
# create an instance of CommentsSort from a JSON string
comments_sort_instance = CommentsSort.from_json(json)
# print the JSON string representation of the object
print(CommentsSort.to_json())

# convert the object into a dict
comments_sort_dict = comments_sort_instance.to_dict()
# create an instance of CommentsSort from a dict
comments_sort_from_dict = CommentsSort.from_dict(comments_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


