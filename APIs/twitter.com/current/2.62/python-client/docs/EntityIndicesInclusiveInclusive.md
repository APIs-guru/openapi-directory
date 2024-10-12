# EntityIndicesInclusiveInclusive

Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | Index (zero-based) at which position this entity ends.  The index is inclusive. | 
**start** | **int** | Index (zero-based) at which position this entity starts.  The index is inclusive. | 

## Example

```python
from openapi_client.models.entity_indices_inclusive_inclusive import EntityIndicesInclusiveInclusive

# TODO update the JSON string below
json = "{}"
# create an instance of EntityIndicesInclusiveInclusive from a JSON string
entity_indices_inclusive_inclusive_instance = EntityIndicesInclusiveInclusive.from_json(json)
# print the JSON string representation of the object
print(EntityIndicesInclusiveInclusive.to_json())

# convert the object into a dict
entity_indices_inclusive_inclusive_dict = entity_indices_inclusive_inclusive_instance.to_dict()
# create an instance of EntityIndicesInclusiveInclusive from a dict
entity_indices_inclusive_inclusive_from_dict = EntityIndicesInclusiveInclusive.from_dict(entity_indices_inclusive_inclusive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


