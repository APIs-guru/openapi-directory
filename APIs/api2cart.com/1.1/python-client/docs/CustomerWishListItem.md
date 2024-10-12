# CustomerWishListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**child_id** | **str** |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_wish_list_item import CustomerWishListItem

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerWishListItem from a JSON string
customer_wish_list_item_instance = CustomerWishListItem.from_json(json)
# print the JSON string representation of the object
print(CustomerWishListItem.to_json())

# convert the object into a dict
customer_wish_list_item_dict = customer_wish_list_item_instance.to_dict()
# create an instance of CustomerWishListItem from a dict
customer_wish_list_item_from_dict = CustomerWishListItem.from_dict(customer_wish_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


