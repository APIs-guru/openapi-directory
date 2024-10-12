# OperationModel

The response model for get operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationModelProperties**](OperationModelProperties.md) |  | [optional] 
**name** | **str** | Operation name for display purposes | [optional] 
**origin** | **str** | origin of the operation | [optional] 
**properties** | [**OperationMetaPropertyInfo**](OperationMetaPropertyInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_model import OperationModel

# TODO update the JSON string below
json = "{}"
# create an instance of OperationModel from a JSON string
operation_model_instance = OperationModel.from_json(json)
# print the JSON string representation of the object
print(OperationModel.to_json())

# convert the object into a dict
operation_model_dict = operation_model_instance.to_dict()
# create an instance of OperationModel from a dict
operation_model_from_dict = OperationModel.from_dict(operation_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


