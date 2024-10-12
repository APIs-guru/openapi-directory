# OperationModelProperties

Properties on operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation for display purposes | [optional] 
**operation** | **str** | Name of the operation for display purposes | [optional] 
**provider** | **str** | Name of the provider for display purposes | [optional] 
**resource** | **str** | Name of the resource type for display purposes | [optional] 

## Example

```python
from openapi_client.models.operation_model_properties import OperationModelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationModelProperties from a JSON string
operation_model_properties_instance = OperationModelProperties.from_json(json)
# print the JSON string representation of the object
print(OperationModelProperties.to_json())

# convert the object into a dict
operation_model_properties_dict = operation_model_properties_instance.to_dict()
# create an instance of OperationModelProperties from a dict
operation_model_properties_from_dict = OperationModelProperties.from_dict(operation_model_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


