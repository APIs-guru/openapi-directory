# IndexEntity

Index is not used as an independent entity, it is retrieved as part of a Table entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**name** | **str** | The name of the index. | [optional] 
**table_columns** | **List[str]** | Table columns used as part of the Index, for example B-TREE index should list the columns which constitutes the index. | [optional] 
**type** | **str** | Type of index, for example B-TREE. | [optional] 
**unique** | **bool** | Boolean value indicating whether the index is unique. | [optional] 

## Example

```python
from openapi_client.models.index_entity import IndexEntity

# TODO update the JSON string below
json = "{}"
# create an instance of IndexEntity from a JSON string
index_entity_instance = IndexEntity.from_json(json)
# print the JSON string representation of the object
print(IndexEntity.to_json())

# convert the object into a dict
index_entity_dict = index_entity_instance.to_dict()
# create an instance of IndexEntity from a dict
index_entity_from_dict = IndexEntity.from_dict(index_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


