# OperationDisplayProperties

The object that represents the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Operation description. | [optional] [readonly] 
**operation** | **str** | The operation that can be performed. | [optional] [readonly] 
**provider** | **str** | The name of the provider. | [optional] [readonly] 
**resource** | **str** | The resource on which the operation is performed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_display_properties import OperationDisplayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDisplayProperties from a JSON string
operation_display_properties_instance = OperationDisplayProperties.from_json(json)
# print the JSON string representation of the object
print(OperationDisplayProperties.to_json())

# convert the object into a dict
operation_display_properties_dict = operation_display_properties_instance.to_dict()
# create an instance of OperationDisplayProperties from a dict
operation_display_properties_from_dict = OperationDisplayProperties.from_dict(operation_display_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


