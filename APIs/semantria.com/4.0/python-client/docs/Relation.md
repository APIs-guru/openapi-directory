# Relation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_score** | **float** | A measure of confidence in the relationship extraction | 
**entities** | [**List[RelationEntity]**](RelationEntity.md) | Returns entities which presents parent relationship | 
**extra** | **str** | Extra information that has been extracted about the relationship | 
**relation_type** | **str** | A label describing the nature of the relationship | 
**type** | **str** | Type of relation according to extracted entities | 

## Example

```python
from openapi_client.models.relation import Relation

# TODO update the JSON string below
json = "{}"
# create an instance of Relation from a JSON string
relation_instance = Relation.from_json(json)
# print the JSON string representation of the object
print(Relation.to_json())

# convert the object into a dict
relation_dict = relation_instance.to_dict()
# create an instance of Relation from a dict
relation_from_dict = Relation.from_dict(relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


