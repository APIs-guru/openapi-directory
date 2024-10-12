# Comments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | [**List[Comment]**](Comment.md) |  | [optional] 

## Example

```python
from openapi_client.models.comments import Comments

# TODO update the JSON string below
json = "{}"
# create an instance of Comments from a JSON string
comments_instance = Comments.from_json(json)
# print the JSON string representation of the object
print(Comments.to_json())

# convert the object into a dict
comments_dict = comments_instance.to_dict()
# create an instance of Comments from a dict
comments_from_dict = Comments.from_dict(comments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


