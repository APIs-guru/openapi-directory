# OperationUpdateContract

Api Operation Update Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OperationUpdateContractProperties**](OperationUpdateContractProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_update_contract import OperationUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of OperationUpdateContract from a JSON string
operation_update_contract_instance = OperationUpdateContract.from_json(json)
# print the JSON string representation of the object
print(OperationUpdateContract.to_json())

# convert the object into a dict
operation_update_contract_dict = operation_update_contract_instance.to_dict()
# create an instance of OperationUpdateContract from a dict
operation_update_contract_from_dict = OperationUpdateContract.from_dict(operation_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


