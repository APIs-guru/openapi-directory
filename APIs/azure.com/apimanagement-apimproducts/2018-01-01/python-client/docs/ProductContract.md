# ProductContract

Product details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductContractProperties**](ProductContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_contract import ProductContract

# TODO update the JSON string below
json = "{}"
# create an instance of ProductContract from a JSON string
product_contract_instance = ProductContract.from_json(json)
# print the JSON string representation of the object
print(ProductContract.to_json())

# convert the object into a dict
product_contract_dict = product_contract_instance.to_dict()
# create an instance of ProductContract from a dict
product_contract_from_dict = ProductContract.from_dict(product_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


