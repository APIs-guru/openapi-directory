# OperationEntityContractProperties

Operation Entity contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_name** | **str** | Api Name. | [optional] [readonly] 
**api_revision** | **str** | Api Revision. | [optional] [readonly] 
**api_version** | **str** | Api Version. | [optional] [readonly] 
**description** | **str** | Operation Description. | [optional] [readonly] 
**display_name** | **str** | Operation name. | [optional] [readonly] 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | [optional] [readonly] 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_entity_contract_properties import OperationEntityContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationEntityContractProperties from a JSON string
operation_entity_contract_properties_instance = OperationEntityContractProperties.from_json(json)
# print the JSON string representation of the object
print(OperationEntityContractProperties.to_json())

# convert the object into a dict
operation_entity_contract_properties_dict = operation_entity_contract_properties_instance.to_dict()
# create an instance of OperationEntityContractProperties from a dict
operation_entity_contract_properties_from_dict = OperationEntityContractProperties.from_dict(operation_entity_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


