# StoredProcedureEntity

Stored procedure's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**sql_code** | **str** | The SQL code which creates the stored procedure. | [optional] 

## Example

```python
from openapi_client.models.stored_procedure_entity import StoredProcedureEntity

# TODO update the JSON string below
json = "{}"
# create an instance of StoredProcedureEntity from a JSON string
stored_procedure_entity_instance = StoredProcedureEntity.from_json(json)
# print the JSON string representation of the object
print(StoredProcedureEntity.to_json())

# convert the object into a dict
stored_procedure_entity_dict = stored_procedure_entity_instance.to_dict()
# create an instance of StoredProcedureEntity from a dict
stored_procedure_entity_from_dict = StoredProcedureEntity.from_dict(stored_procedure_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


