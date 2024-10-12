# OperationEntityContract

Operation Entity Contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OperationEntityContractProperties**](OperationEntityContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_entity_contract import OperationEntityContract

# TODO update the JSON string below
json = "{}"
# create an instance of OperationEntityContract from a JSON string
operation_entity_contract_instance = OperationEntityContract.from_json(json)
# print the JSON string representation of the object
print(OperationEntityContract.to_json())

# convert the object into a dict
operation_entity_contract_dict = operation_entity_contract_instance.to_dict()
# create an instance of OperationEntityContract from a dict
operation_entity_contract_from_dict = OperationEntityContract.from_dict(operation_entity_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


