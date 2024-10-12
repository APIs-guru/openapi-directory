# OperationLogSpecification

Details about an operation related to logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_duration** | **str** | Blobs created in the customer storage account, per hour. | [optional] 
**display_name** | **str** | Localized display name. | [optional] 
**name** | **str** | The name of the log category. | [optional] 

## Example

```python
from openapi_client.models.operation_log_specification import OperationLogSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OperationLogSpecification from a JSON string
operation_log_specification_instance = OperationLogSpecification.from_json(json)
# print the JSON string representation of the object
print(OperationLogSpecification.to_json())

# convert the object into a dict
operation_log_specification_dict = operation_log_specification_instance.to_dict()
# create an instance of OperationLogSpecification from a dict
operation_log_specification_from_dict = OperationLogSpecification.from_dict(operation_log_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


