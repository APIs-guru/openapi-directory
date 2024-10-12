# OperationContractProperties

Operation Contract Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Operation Name. | 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | 
**description** | **str** | Description of the operation. May include HTML formatting tags. | [optional] 
**policies** | **str** | Operation Policies | [optional] 
**request** | [**RequestContract**](RequestContract.md) |  | [optional] 
**responses** | [**List[ResponseContract]**](ResponseContract.md) | Array of Operation responses. | [optional] 
**template_parameters** | [**List[ParameterContract]**](ParameterContract.md) | Collection of URL template parameters. | [optional] 

## Example

```python
from openapi_client.models.operation_contract_properties import OperationContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationContractProperties from a JSON string
operation_contract_properties_instance = OperationContractProperties.from_json(json)
# print the JSON string representation of the object
print(OperationContractProperties.to_json())

# convert the object into a dict
operation_contract_properties_dict = operation_contract_properties_instance.to_dict()
# create an instance of OperationContractProperties from a dict
operation_contract_properties_from_dict = OperationContractProperties.from_dict(operation_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


