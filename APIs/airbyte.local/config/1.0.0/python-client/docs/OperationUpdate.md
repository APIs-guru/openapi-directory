# OperationUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**operation_id** | **str** |  | 
**operator_configuration** | [**OperatorConfiguration**](OperatorConfiguration.md) |  | 

## Example

```python
from openapi_client.models.operation_update import OperationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of OperationUpdate from a JSON string
operation_update_instance = OperationUpdate.from_json(json)
# print the JSON string representation of the object
print(OperationUpdate.to_json())

# convert the object into a dict
operation_update_dict = operation_update_instance.to_dict()
# create an instance of OperationUpdate from a dict
operation_update_from_dict = OperationUpdate.from_dict(operation_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


