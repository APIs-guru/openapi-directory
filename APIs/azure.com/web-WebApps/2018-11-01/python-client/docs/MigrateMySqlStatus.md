# MigrateMySqlStatus

MySQL migration status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | MigrateMySqlStatus resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migrate_my_sql_status import MigrateMySqlStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateMySqlStatus from a JSON string
migrate_my_sql_status_instance = MigrateMySqlStatus.from_json(json)
# print the JSON string representation of the object
print(MigrateMySqlStatus.to_json())

# convert the object into a dict
migrate_my_sql_status_dict = migrate_my_sql_status_instance.to_dict()
# create an instance of MigrateMySqlStatus from a dict
migrate_my_sql_status_from_dict = MigrateMySqlStatus.from_dict(migrate_my_sql_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


