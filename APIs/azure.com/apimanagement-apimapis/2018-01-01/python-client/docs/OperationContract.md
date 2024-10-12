# OperationContract

Api Operation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OperationContractProperties**](OperationContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_contract import OperationContract

# TODO update the JSON string below
json = "{}"
# create an instance of OperationContract from a JSON string
operation_contract_instance = OperationContract.from_json(json)
# print the JSON string representation of the object
print(OperationContract.to_json())

# convert the object into a dict
operation_contract_dict = operation_contract_instance.to_dict()
# create an instance of OperationContract from a dict
operation_contract_from_dict = OperationContract.from_dict(operation_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


