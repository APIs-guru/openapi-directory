# MigrateProjectProperties

Class for migrate project properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_summary_refreshed_time** | **datetime** | Gets the last time the project summary was refreshed. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the migrate project. | [optional] 
**refresh_summary_state** | **str** | Gets the refresh summary state. | [optional] [readonly] 
**registered_tools** | **List[str]** | Gets or sets the list of tools registered with the migrate project. | [optional] 
**summary** | [**Dict[str, ProjectSummary]**](ProjectSummary.md) | Gets the summary of the migrate project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migrate_project_properties import MigrateProjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateProjectProperties from a JSON string
migrate_project_properties_instance = MigrateProjectProperties.from_json(json)
# print the JSON string representation of the object
print(MigrateProjectProperties.to_json())

# convert the object into a dict
migrate_project_properties_dict = migrate_project_properties_instance.to_dict()
# create an instance of MigrateProjectProperties from a dict
migrate_project_properties_from_dict = MigrateProjectProperties.from_dict(migrate_project_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


