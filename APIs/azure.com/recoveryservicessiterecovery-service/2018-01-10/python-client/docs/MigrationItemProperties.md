# MigrationItemProperties

Migration item properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_operations** | **List[str]** | The allowed operations on the migration item, based on the current migration state of the item. | [optional] [readonly] 
**current_job** | [**CurrentJobDetails**](CurrentJobDetails.md) |  | [optional] 
**event_correlation_id** | **str** | The correlation Id for events associated with this migration item. | [optional] [readonly] 
**health** | **str** | The consolidated health. | [optional] [readonly] 
**health_errors** | [**List[HealthError]**](HealthError.md) | The list of health errors. | [optional] [readonly] 
**last_test_migration_status** | **str** | The status of the last test migration. | [optional] [readonly] 
**last_test_migration_time** | **datetime** | The last test migration time. | [optional] [readonly] 
**machine_name** | **str** | The on-premise virtual machine name. | [optional] [readonly] 
**migration_state** | **str** | The migration status. | [optional] [readonly] 
**migration_state_description** | **str** | The migration state description. | [optional] [readonly] 
**policy_friendly_name** | **str** | The name of policy governing this item. | [optional] [readonly] 
**policy_id** | **str** | The ARM Id of policy governing this item. | [optional] [readonly] 
**provider_specific_details** | [**MigrationProviderSpecificSettings**](MigrationProviderSpecificSettings.md) |  | [optional] 
**test_migrate_state** | **str** | The test migrate state. | [optional] [readonly] 
**test_migrate_state_description** | **str** | The test migrate state description. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_item_properties import MigrationItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationItemProperties from a JSON string
migration_item_properties_instance = MigrationItemProperties.from_json(json)
# print the JSON string representation of the object
print(MigrationItemProperties.to_json())

# convert the object into a dict
migration_item_properties_dict = migration_item_properties_instance.to_dict()
# create an instance of MigrationItemProperties from a dict
migration_item_properties_from_dict = MigrationItemProperties.from_dict(migration_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


