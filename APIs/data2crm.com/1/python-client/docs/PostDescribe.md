# PostDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_describe import PostDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of PostDescribe from a JSON string
post_describe_instance = PostDescribe.from_json(json)
# print the JSON string representation of the object
print(PostDescribe.to_json())

# convert the object into a dict
post_describe_dict = post_describe_instance.to_dict()
# create an instance of PostDescribe from a dict
post_describe_from_dict = PostDescribe.from_dict(post_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


