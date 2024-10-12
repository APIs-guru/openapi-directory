# MigrateInstanceRequest

Request for migrating a User-Managed Notebook to Workbench Instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_startup_script_option** | **str** | Optional. Specifies the behavior of post startup script during migration. | [optional] 

## Example

```python
from openapi_client.models.migrate_instance_request import MigrateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateInstanceRequest from a JSON string
migrate_instance_request_instance = MigrateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(MigrateInstanceRequest.to_json())

# convert the object into a dict
migrate_instance_request_dict = migrate_instance_request_instance.to_dict()
# create an instance of MigrateInstanceRequest from a dict
migrate_instance_request_from_dict = MigrateInstanceRequest.from_dict(migrate_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


