# RelationDescriptor

Describes a relation and its columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_labels** | **Dict[str, str]** | A set of BigQuery labels that should be applied to the relation. | [optional] 
**columns** | [**List[ColumnDescriptor]**](ColumnDescriptor.md) | A list of descriptions of columns within the relation. | [optional] 
**description** | **str** | A text description of the relation. | [optional] 

## Example

```python
from openapi_client.models.relation_descriptor import RelationDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of RelationDescriptor from a JSON string
relation_descriptor_instance = RelationDescriptor.from_json(json)
# print the JSON string representation of the object
print(RelationDescriptor.to_json())

# convert the object into a dict
relation_descriptor_dict = relation_descriptor_instance.to_dict()
# create an instance of RelationDescriptor from a dict
relation_descriptor_from_dict = RelationDescriptor.from_dict(relation_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


