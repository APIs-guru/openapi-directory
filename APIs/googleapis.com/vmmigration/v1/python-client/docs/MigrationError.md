# MigrationError

Represents migration resource error information that can be used with google.rpc.Status message. MigrationError is used to present the user with error information in migration operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_item** | [**LocalizedMessage**](LocalizedMessage.md) |  | [optional] 
**code** | **str** | Output only. The error code. | [optional] [readonly] 
**error_message** | [**LocalizedMessage**](LocalizedMessage.md) |  | [optional] 
**error_time** | **str** | Output only. The time the error occurred. | [optional] [readonly] 
**help_links** | [**List[Link]**](Link.md) | Output only. URL(s) pointing to additional information on handling the current error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_error import MigrationError

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationError from a JSON string
migration_error_instance = MigrationError.from_json(json)
# print the JSON string representation of the object
print(MigrationError.to_json())

# convert the object into a dict
migration_error_dict = migration_error_instance.to_dict()
# create an instance of MigrationError from a dict
migration_error_from_dict = MigrationError.from_dict(migration_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


