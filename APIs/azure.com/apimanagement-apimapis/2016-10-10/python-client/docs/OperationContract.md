# OperationContract

Api Operation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Uniquely identifies the operation within the current API Management service instance. The value is a valid relative URL in the format of /apis/{aid}/operations/{id} where {aid} is an API identifier and {id} is an operation identifier. | [optional] [readonly] 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | 
**name** | **str** | Operation Name. | 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | 
**description** | **str** | Description of the operation. May include HTML formatting tags. | [optional] 
**request** | [**RequestContract**](RequestContract.md) |  | [optional] 
**responses** | [**List[ResultContract]**](ResultContract.md) | Array of Operation responses. | [optional] 
**template_parameters** | [**List[ParameterContract]**](ParameterContract.md) | Collection of URL template parameters. | [optional] 

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


