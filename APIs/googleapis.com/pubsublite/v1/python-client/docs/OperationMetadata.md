# OperationMetadata

Metadata for long running operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the operation was created. | [optional] 
**end_time** | **str** | The time the operation finished running. Not set if the operation has not completed. | [optional] 
**target** | **str** | Resource path for the target of the operation. For example, targets of seeks are subscription resources, structured like: projects/{project_number}/locations/{location}/subscriptions/{subscription_id} | [optional] 
**verb** | **str** | Name of the verb executed by the operation. | [optional] 

## Example

```python
from openapi_client.models.operation_metadata import OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadata from a JSON string
operation_metadata_instance = OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(OperationMetadata.to_json())

# convert the object into a dict
operation_metadata_dict = operation_metadata_instance.to_dict()
# create an instance of OperationMetadata from a dict
operation_metadata_from_dict = OperationMetadata.from_dict(operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


