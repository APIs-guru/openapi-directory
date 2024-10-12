# OperationRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**operation_id** | **str** |  | 
**operator_configuration** | [**OperatorConfiguration**](OperatorConfiguration.md) |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.operation_read import OperationRead

# TODO update the JSON string below
json = "{}"
# create an instance of OperationRead from a JSON string
operation_read_instance = OperationRead.from_json(json)
# print the JSON string representation of the object
print(OperationRead.to_json())

# convert the object into a dict
operation_read_dict = operation_read_instance.to_dict()
# create an instance of OperationRead from a dict
operation_read_from_dict = OperationRead.from_dict(operation_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


