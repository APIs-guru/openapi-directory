# TagResourceContract

TagResource contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**ApiTagResourceContractProperties**](ApiTagResourceContractProperties.md) |  | [optional] 
**operation** | [**OperationTagResourceContractProperties**](OperationTagResourceContractProperties.md) |  | [optional] 
**product** | [**ProductTagResourceContractProperties**](ProductTagResourceContractProperties.md) |  | [optional] 
**tag** | [**TagTagResourceContractProperties**](TagTagResourceContractProperties.md) |  | 

## Example

```python
from openapi_client.models.tag_resource_contract import TagResourceContract

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceContract from a JSON string
tag_resource_contract_instance = TagResourceContract.from_json(json)
# print the JSON string representation of the object
print(TagResourceContract.to_json())

# convert the object into a dict
tag_resource_contract_dict = tag_resource_contract_instance.to_dict()
# create an instance of TagResourceContract from a dict
tag_resource_contract_from_dict = TagResourceContract.from_dict(tag_resource_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


