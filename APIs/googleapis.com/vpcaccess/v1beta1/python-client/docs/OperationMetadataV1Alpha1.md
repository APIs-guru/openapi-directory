# OperationMetadataV1Alpha1

Metadata for google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. Time when the operation completed. | [optional] [readonly] 
**insert_time** | **str** | Output only. Time when the operation was created. | [optional] [readonly] 
**method** | **str** | Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1alpha1.Connectors.CreateConnector. | [optional] [readonly] 
**target** | **str** | Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_metadata_v1_alpha1 import OperationMetadataV1Alpha1

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadataV1Alpha1 from a JSON string
operation_metadata_v1_alpha1_instance = OperationMetadataV1Alpha1.from_json(json)
# print the JSON string representation of the object
print(OperationMetadataV1Alpha1.to_json())

# convert the object into a dict
operation_metadata_v1_alpha1_dict = operation_metadata_v1_alpha1_instance.to_dict()
# create an instance of OperationMetadataV1Alpha1 from a dict
operation_metadata_v1_alpha1_from_dict = OperationMetadataV1Alpha1.from_dict(operation_metadata_v1_alpha1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


