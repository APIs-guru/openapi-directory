# Operation

An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_warning** | [**ApiWarning**](ApiWarning.md) |  | [optional] 
**backup_context** | [**BackupContext**](BackupContext.md) |  | [optional] 
**end_time** | **str** | The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**error** | [**OperationErrors**](OperationErrors.md) |  | [optional] 
**export_context** | [**ExportContext**](ExportContext.md) |  | [optional] 
**import_context** | [**ImportContext**](ImportContext.md) |  | [optional] 
**insert_time** | **str** | The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**kind** | **str** | This is always &#x60;sql#operation&#x60;. | [optional] 
**name** | **str** | An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation. | [optional] 
**operation_type** | **str** | The type of the operation. Valid values are: * &#x60;CREATE&#x60; * &#x60;DELETE&#x60; * &#x60;UPDATE&#x60; * &#x60;RESTART&#x60; * &#x60;IMPORT&#x60; * &#x60;EXPORT&#x60; * &#x60;BACKUP_VOLUME&#x60; * &#x60;RESTORE_VOLUME&#x60; * &#x60;CREATE_USER&#x60; * &#x60;DELETE_USER&#x60; * &#x60;CREATE_DATABASE&#x60; * &#x60;DELETE_DATABASE&#x60; | [optional] 
**self_link** | **str** | The URI of this resource. | [optional] 
**start_time** | **str** | The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 
**status** | **str** | The status of an operation. | [optional] 
**target_id** | **str** | Name of the database instance related to this operation. | [optional] 
**target_link** | **str** |  | [optional] 
**target_project** | **str** | The project ID of the target instance related to this operation. | [optional] 
**user** | **str** | The email address of the user who initiated this operation. | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


