# BasketItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | [**List[BasketItemOption]**](BasketItemOption.md) |  | [optional] 
**parent_id** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**product_id** | **str** |  | [optional] 
**quantity** | **float** |  | [optional] 
**sku** | **str** |  | [optional] 
**tax** | **float** |  | [optional] 
**variant_id** | **str** |  | [optional] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basket_item import BasketItem

# TODO update the JSON string below
json = "{}"
# create an instance of BasketItem from a JSON string
basket_item_instance = BasketItem.from_json(json)
# print the JSON string representation of the object
print(BasketItem.to_json())

# convert the object into a dict
basket_item_dict = basket_item_instance.to_dict()
# create an instance of BasketItem from a dict
basket_item_from_dict = BasketItem.from_dict(basket_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


