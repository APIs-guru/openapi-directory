# CommentDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.comment_describe import CommentDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of CommentDescribe from a JSON string
comment_describe_instance = CommentDescribe.from_json(json)
# print the JSON string representation of the object
print(CommentDescribe.to_json())

# convert the object into a dict
comment_describe_dict = comment_describe_instance.to_dict()
# create an instance of CommentDescribe from a dict
comment_describe_from_dict = CommentDescribe.from_dict(comment_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


