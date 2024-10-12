# TagRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tag_rule import TagRule

# TODO update the JSON string below
json = "{}"
# create an instance of TagRule from a JSON string
tag_rule_instance = TagRule.from_json(json)
# print the JSON string representation of the object
print(TagRule.to_json())

# convert the object into a dict
tag_rule_dict = tag_rule_instance.to_dict()
# create an instance of TagRule from a dict
tag_rule_from_dict = TagRule.from_dict(tag_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


