# PostRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**PostEntityRelation**](PostEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.post_relation import PostRelation

# TODO update the JSON string below
json = "{}"
# create an instance of PostRelation from a JSON string
post_relation_instance = PostRelation.from_json(json)
# print the JSON string representation of the object
print(PostRelation.to_json())

# convert the object into a dict
post_relation_dict = post_relation_instance.to_dict()
# create an instance of PostRelation from a dict
post_relation_from_dict = PostRelation.from_dict(post_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


