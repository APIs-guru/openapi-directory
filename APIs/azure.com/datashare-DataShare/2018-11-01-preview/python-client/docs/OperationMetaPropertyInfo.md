# OperationMetaPropertyInfo

properties on meta info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**OperationMetaServiceSpecification**](OperationMetaServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_meta_property_info import OperationMetaPropertyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetaPropertyInfo from a JSON string
operation_meta_property_info_instance = OperationMetaPropertyInfo.from_json(json)
# print the JSON string representation of the object
print(OperationMetaPropertyInfo.to_json())

# convert the object into a dict
operation_meta_property_info_dict = operation_meta_property_info_instance.to_dict()
# create an instance of OperationMetaPropertyInfo from a dict
operation_meta_property_info_from_dict = OperationMetaPropertyInfo.from_dict(operation_meta_property_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


