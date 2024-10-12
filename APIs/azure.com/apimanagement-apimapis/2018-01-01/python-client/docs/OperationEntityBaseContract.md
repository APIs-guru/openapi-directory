# OperationEntityBaseContract

Api Operation Entity Base Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation. May include HTML formatting tags. | [optional] 
**policies** | **str** | Operation Policies | [optional] 
**request** | [**RequestContract**](RequestContract.md) |  | [optional] 
**responses** | [**List[ResponseContract]**](ResponseContract.md) | Array of Operation responses. | [optional] 
**template_parameters** | [**List[ParameterContract]**](ParameterContract.md) | Collection of URL template parameters. | [optional] 

## Example

```python
from openapi_client.models.operation_entity_base_contract import OperationEntityBaseContract

# TODO update the JSON string below
json = "{}"
# create an instance of OperationEntityBaseContract from a JSON string
operation_entity_base_contract_instance = OperationEntityBaseContract.from_json(json)
# print the JSON string representation of the object
print(OperationEntityBaseContract.to_json())

# convert the object into a dict
operation_entity_base_contract_dict = operation_entity_base_contract_instance.to_dict()
# create an instance of OperationEntityBaseContract from a dict
operation_entity_base_contract_from_dict = OperationEntityBaseContract.from_dict(operation_entity_base_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


