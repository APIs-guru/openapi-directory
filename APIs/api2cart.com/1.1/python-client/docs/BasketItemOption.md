# BasketItemOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**used_in_combination** | **bool** |  | [optional] 
**value** | **str** |  | [optional] 
**value_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basket_item_option import BasketItemOption

# TODO update the JSON string below
json = "{}"
# create an instance of BasketItemOption from a JSON string
basket_item_option_instance = BasketItemOption.from_json(json)
# print the JSON string representation of the object
print(BasketItemOption.to_json())

# convert the object into a dict
basket_item_option_dict = basket_item_option_instance.to_dict()
# create an instance of BasketItemOption from a dict
basket_item_option_from_dict = BasketItemOption.from_dict(basket_item_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


