# OperationMetaLogSpecification

log specifications for operation api

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_duration** | **str** | blob duration of the log | [optional] 
**display_name** | **str** | localized name of the log category | [optional] 
**name** | **str** | name of the log category | [optional] 

## Example

```python
from openapi_client.models.operation_meta_log_specification import OperationMetaLogSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetaLogSpecification from a JSON string
operation_meta_log_specification_instance = OperationMetaLogSpecification.from_json(json)
# print the JSON string representation of the object
print(OperationMetaLogSpecification.to_json())

# convert the object into a dict
operation_meta_log_specification_dict = operation_meta_log_specification_instance.to_dict()
# create an instance of OperationMetaLogSpecification from a dict
operation_meta_log_specification_from_dict = OperationMetaLogSpecification.from_dict(operation_meta_log_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


