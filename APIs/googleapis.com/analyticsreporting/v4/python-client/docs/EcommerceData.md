# EcommerceData

E-commerce details associated with the user activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | Action associated with this e-commerce action. | [optional] 
**ecommerce_type** | **str** | The type of this e-commerce activity. | [optional] 
**products** | [**List[ProductData]**](ProductData.md) | Details of the products in this transaction. | [optional] 
**transaction** | [**TransactionData**](TransactionData.md) |  | [optional] 

## Example

```python
from openapi_client.models.ecommerce_data import EcommerceData

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceData from a JSON string
ecommerce_data_instance = EcommerceData.from_json(json)
# print the JSON string representation of the object
print(EcommerceData.to_json())

# convert the object into a dict
ecommerce_data_dict = ecommerce_data_instance.to_dict()
# create an instance of EcommerceData from a dict
ecommerce_data_from_dict = EcommerceData.from_dict(ecommerce_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


