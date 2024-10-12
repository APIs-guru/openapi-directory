# OperationMetaServiceSpecification

The operation meta service specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_specifications** | [**List[OperationMetaLogSpecification]**](OperationMetaLogSpecification.md) | log specifications for the operation | [optional] 
**metric_specifications** | [**List[OperationMetaMetricSpecification]**](OperationMetaMetricSpecification.md) | metric specifications for the operation | [optional] 

## Example

```python
from openapi_client.models.operation_meta_service_specification import OperationMetaServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetaServiceSpecification from a JSON string
operation_meta_service_specification_instance = OperationMetaServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(OperationMetaServiceSpecification.to_json())

# convert the object into a dict
operation_meta_service_specification_dict = operation_meta_service_specification_instance.to_dict()
# create an instance of OperationMetaServiceSpecification from a dict
operation_meta_service_specification_from_dict = OperationMetaServiceSpecification.from_dict(operation_meta_service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


