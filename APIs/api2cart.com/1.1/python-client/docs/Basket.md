# Basket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**basket_products** | [**List[BasketItem]**](BasketItem.md) |  | [optional] 
**basket_url** | **str** |  | [optional] 
**created_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**customer** | [**BaseCustomer**](BaseCustomer.md) |  | [optional] 
**id** | **str** |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.basket import Basket

# TODO update the JSON string below
json = "{}"
# create an instance of Basket from a JSON string
basket_instance = Basket.from_json(json)
# print the JSON string representation of the object
print(Basket.to_json())

# convert the object into a dict
basket_dict = basket_instance.to_dict()
# create an instance of Basket from a dict
basket_from_dict = Basket.from_dict(basket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


