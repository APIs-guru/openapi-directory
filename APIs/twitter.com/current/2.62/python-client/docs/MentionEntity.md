# MentionEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | Index (zero-based) at which position this entity ends.  The index is exclusive. | 
**start** | **int** | Index (zero-based) at which position this entity starts.  The index is inclusive. | 
**id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**username** | **str** | The Twitter handle (screen name) of this user. | 

## Example

```python
from openapi_client.models.mention_entity import MentionEntity

# TODO update the JSON string below
json = "{}"
# create an instance of MentionEntity from a JSON string
mention_entity_instance = MentionEntity.from_json(json)
# print the JSON string representation of the object
print(MentionEntity.to_json())

# convert the object into a dict
mention_entity_dict = mention_entity_instance.to_dict()
# create an instance of MentionEntity from a dict
mention_entity_from_dict = MentionEntity.from_dict(mention_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


