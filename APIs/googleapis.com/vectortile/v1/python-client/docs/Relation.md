# Relation

Represents a relation to another feature in the tile. For example, a building might be occupied by a given POI. The related feature can be retrieved using the related feature index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_feature_index** | **int** | Zero-based index to look up the related feature from the list of features in the tile. | [optional] 
**relation_type** | **str** | Relation type between the origin feature to the related feature. | [optional] 

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


