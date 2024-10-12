# SessionOperationMetadata

Metadata describing the Session operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the operation was created. | [optional] 
**description** | **str** | Short description of the operation. | [optional] 
**done_time** | **str** | The time when the operation was finished. | [optional] 
**labels** | **Dict[str, str]** | Labels associated with the operation. | [optional] 
**operation_type** | **str** | The operation type. | [optional] 
**session** | **str** | Name of the session for the operation. | [optional] 
**session_uuid** | **str** | Session UUID for the operation. | [optional] 
**warnings** | **List[str]** | Warnings encountered during operation execution. | [optional] 

## Example

```python
from openapi_client.models.session_operation_metadata import SessionOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SessionOperationMetadata from a JSON string
session_operation_metadata_instance = SessionOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(SessionOperationMetadata.to_json())

# convert the object into a dict
session_operation_metadata_dict = session_operation_metadata_instance.to_dict()
# create an instance of SessionOperationMetadata from a dict
session_operation_metadata_from_dict = SessionOperationMetadata.from_dict(session_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


