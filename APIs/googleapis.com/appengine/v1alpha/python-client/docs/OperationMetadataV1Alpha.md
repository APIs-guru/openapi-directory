# OperationMetadataV1Alpha

Metadata for the given google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_version_metadata** | [**CreateVersionMetadataV1Alpha**](CreateVersionMetadataV1Alpha.md) |  | [optional] 
**end_time** | **str** | Time that this operation completed.@OutputOnly | [optional] 
**ephemeral_message** | **str** | Ephemeral message that may change every time the operation is polled. @OutputOnly | [optional] 
**insert_time** | **str** | Time that this operation was created.@OutputOnly | [optional] 
**method** | **str** | API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly | [optional] 
**target** | **str** | Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly | [optional] 
**user** | **str** | User who requested this operation.@OutputOnly | [optional] 
**warning** | **List[str]** | Durable messages that persist on every operation poll. @OutputOnly | [optional] 

## Example

```python
from openapi_client.models.operation_metadata_v1_alpha import OperationMetadataV1Alpha

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadataV1Alpha from a JSON string
operation_metadata_v1_alpha_instance = OperationMetadataV1Alpha.from_json(json)
# print the JSON string representation of the object
print(OperationMetadataV1Alpha.to_json())

# convert the object into a dict
operation_metadata_v1_alpha_dict = operation_metadata_v1_alpha_instance.to_dict()
# create an instance of OperationMetadataV1Alpha from a dict
operation_metadata_v1_alpha_from_dict = OperationMetadataV1Alpha.from_dict(operation_metadata_v1_alpha_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


