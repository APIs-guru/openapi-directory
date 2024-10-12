# OperationMetadataV1Beta1

Metadata for google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. Time when the operation completed. | [optional] [readonly] 
**method** | **str** | Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1beta1.Connectors.CreateConnector. | [optional] [readonly] 
**target** | **str** | Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_metadata_v1_beta1 import OperationMetadataV1Beta1

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadataV1Beta1 from a JSON string
operation_metadata_v1_beta1_instance = OperationMetadataV1Beta1.from_json(json)
# print the JSON string representation of the object
print(OperationMetadataV1Beta1.to_json())

# convert the object into a dict
operation_metadata_v1_beta1_dict = operation_metadata_v1_beta1_instance.to_dict()
# create an instance of OperationMetadataV1Beta1 from a dict
operation_metadata_v1_beta1_from_dict = OperationMetadataV1Beta1.from_dict(operation_metadata_v1_beta1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


