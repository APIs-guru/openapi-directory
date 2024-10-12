# AddonMigration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addon_id** | **str** |  | [optional] 
**callback_url** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**database_user** | **str** |  | [optional] 
**dump_restore_finished_date** | **str** |  | [optional] 
**dump_restore_start_date** | **str** |  | [optional] 
**end_date** | **str** |  | [optional] 
**exit_message** | **str** |  | [optional] 
**hostname** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 
**last_state_update_date** | **str** |  | [optional] 
**new_cluster_id** | **str** |  | [optional] 
**new_cluster_label** | **str** |  | [optional] 
**new_instance_id** | **str** |  | [optional] 
**new_plan** | **str** |  | [optional] 
**new_recipient_hostname** | **str** |  | [optional] 
**new_zone** | **str** |  | [optional] 
**old_cluster_id** | **str** |  | [optional] 
**old_cluster_label** | **str** |  | [optional] 
**old_instance_id** | **str** |  | [optional] 
**old_plan** | **str** |  | [optional] 
**old_recipient_hostname** | **str** |  | [optional] 
**old_zone** | **str** |  | [optional] 
**port** | **float** |  | [optional] 
**request_date** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.addon_migration import AddonMigration

# TODO update the JSON string below
json = "{}"
# create an instance of AddonMigration from a JSON string
addon_migration_instance = AddonMigration.from_json(json)
# print the JSON string representation of the object
print(AddonMigration.to_json())

# convert the object into a dict
addon_migration_dict = addon_migration_instance.to_dict()
# create an instance of AddonMigration from a dict
addon_migration_from_dict = AddonMigration.from_dict(addon_migration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


