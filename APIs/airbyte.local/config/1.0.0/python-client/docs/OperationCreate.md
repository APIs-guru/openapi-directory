# OperationCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**operator_configuration** | [**OperatorConfiguration**](OperatorConfiguration.md) |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.operation_create import OperationCreate

# TODO update the JSON string below
json = "{}"
# create an instance of OperationCreate from a JSON string
operation_create_instance = OperationCreate.from_json(json)
# print the JSON string representation of the object
print(OperationCreate.to_json())

# convert the object into a dict
operation_create_dict = operation_create_instance.to_dict()
# create an instance of OperationCreate from a dict
operation_create_from_dict = OperationCreate.from_dict(operation_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


