# MaterializedViewEntity

MaterializedView's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**sql_code** | **str** | The SQL code which creates the view. | [optional] 

## Example

```python
from openapi_client.models.materialized_view_entity import MaterializedViewEntity

# TODO update the JSON string below
json = "{}"
# create an instance of MaterializedViewEntity from a JSON string
materialized_view_entity_instance = MaterializedViewEntity.from_json(json)
# print the JSON string representation of the object
print(MaterializedViewEntity.to_json())

# convert the object into a dict
materialized_view_entity_dict = materialized_view_entity_instance.to_dict()
# create an instance of MaterializedViewEntity from a dict
materialized_view_entity_from_dict = MaterializedViewEntity.from_dict(materialized_view_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


