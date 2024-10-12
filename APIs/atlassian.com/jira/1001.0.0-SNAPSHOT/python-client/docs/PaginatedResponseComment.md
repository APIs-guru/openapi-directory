# PaginatedResponseComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** |  | [optional] 
**results** | [**List[Comment]**](Comment.md) |  | [optional] 
**start_at** | **int** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.paginated_response_comment import PaginatedResponseComment

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseComment from a JSON string
paginated_response_comment_instance = PaginatedResponseComment.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseComment.to_json())

# convert the object into a dict
paginated_response_comment_dict = paginated_response_comment_instance.to_dict()
# create an instance of PaginatedResponseComment from a dict
paginated_response_comment_from_dict = PaginatedResponseComment.from_dict(paginated_response_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


