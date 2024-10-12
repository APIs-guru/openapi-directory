# TagResourceContractProperties

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**TagResourceContractPropertiesApi**](TagResourceContractPropertiesApi.md) |  | [optional] 
**operation** | [**OperationEntityContract**](OperationEntityContract.md) |  | [optional] 
**product** | [**TagResourceContractPropertiesProduct**](TagResourceContractPropertiesProduct.md) |  | [optional] 
**tag** | [**TagResourceContractPropertiesTag**](TagResourceContractPropertiesTag.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_resource_contract_properties import TagResourceContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceContractProperties from a JSON string
tag_resource_contract_properties_instance = TagResourceContractProperties.from_json(json)
# print the JSON string representation of the object
print(TagResourceContractProperties.to_json())

# convert the object into a dict
tag_resource_contract_properties_dict = tag_resource_contract_properties_instance.to_dict()
# create an instance of TagResourceContractProperties from a dict
tag_resource_contract_properties_from_dict = TagResourceContractProperties.from_dict(tag_resource_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


