# TagRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**TagEntityRelation**](TagEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.tag_relation import TagRelation

# TODO update the JSON string below
json = "{}"
# create an instance of TagRelation from a JSON string
tag_relation_instance = TagRelation.from_json(json)
# print the JSON string representation of the object
print(TagRelation.to_json())

# convert the object into a dict
tag_relation_dict = tag_relation_instance.to_dict()
# create an instance of TagRelation from a dict
tag_relation_from_dict = TagRelation.from_dict(tag_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


