# OperationMetadata

Metadata for google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. Time when the operation completed. | [optional] [readonly] 
**method** | **str** | Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1.Connectors.CreateConnector. | [optional] [readonly] 
**target** | **str** | Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. | [optional] [readonly] 

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


