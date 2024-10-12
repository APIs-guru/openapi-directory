# MigrationWarning

Represents migration resource warning information that can be used with google.rpc.Status message. MigrationWarning is used to present the user with warning information in migration operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_item** | [**LocalizedMessage**](LocalizedMessage.md) |  | [optional] 
**code** | **str** | The warning code. | [optional] 
**help_links** | [**List[Link]**](Link.md) | URL(s) pointing to additional information on handling the current warning. | [optional] 
**warning_message** | [**LocalizedMessage**](LocalizedMessage.md) |  | [optional] 
**warning_time** | **str** | The time the warning occurred. | [optional] 

## Example

```python
from openapi_client.models.migration_warning import MigrationWarning

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationWarning from a JSON string
migration_warning_instance = MigrationWarning.from_json(json)
# print the JSON string representation of the object
print(MigrationWarning.to_json())

# convert the object into a dict
migration_warning_dict = migration_warning_instance.to_dict()
# create an instance of MigrationWarning from a dict
migration_warning_from_dict = MigrationWarning.from_dict(migration_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


