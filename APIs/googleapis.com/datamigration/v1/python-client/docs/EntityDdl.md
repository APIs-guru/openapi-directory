# EntityDdl

A single DDL statement for a specific entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ddl** | **str** | The actual ddl code. | [optional] 
**ddl_type** | **str** | Type of DDL (Create, Alter). | [optional] 
**entity** | **str** | The name of the database entity the ddl refers to. | [optional] 
**entity_type** | **str** | The entity type (if the DDL is for a sub entity). | [optional] 
**issue_id** | **List[str]** | EntityIssues found for this ddl. | [optional] 

## Example

```python
from openapi_client.models.entity_ddl import EntityDdl

# TODO update the JSON string below
json = "{}"
# create an instance of EntityDdl from a JSON string
entity_ddl_instance = EntityDdl.from_json(json)
# print the JSON string representation of the object
print(EntityDdl.to_json())

# convert the object into a dict
entity_ddl_dict = entity_ddl_instance.to_dict()
# create an instance of EntityDdl from a dict
entity_ddl_from_dict = EntityDdl.from_dict(entity_ddl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


