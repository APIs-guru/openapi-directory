# OperationMetadata

The metadata associated with a long running operation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**progress_percentage** | **int** | Percentage of completion of this operation, ranging from 0 to 100. | [optional] 
**resource_names** | **List[str]** | The full name of the resources that this operation is directly associated with. | [optional] 
**start_time** | **str** | The start time of the operation. | [optional] 
**steps** | [**List[Step]**](Step.md) | Detailed status information for each step. The order is undetermined. | [optional] 

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


