# GroupRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** | An array of groups that should be related | 
**type** | **str** | Specifies the type of relation. It must be either of type &#x60;in_sequence&#x60; or &#x60;in_direct_sequence&#x60;.  | 

## Example

```python
from openapi_client.models.group_relation import GroupRelation

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRelation from a JSON string
group_relation_instance = GroupRelation.from_json(json)
# print the JSON string representation of the object
print(GroupRelation.to_json())

# convert the object into a dict
group_relation_dict = group_relation_instance.to_dict()
# create an instance of GroupRelation from a dict
group_relation_from_dict = GroupRelation.from_dict(group_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


