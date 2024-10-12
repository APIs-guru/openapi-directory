# CustomerWishList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**created_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_public** | **str** |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**name** | **str** |  | [optional] 
**products** | [**List[CustomerWishListItem]**](CustomerWishListItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_wish_list import CustomerWishList

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerWishList from a JSON string
customer_wish_list_instance = CustomerWishList.from_json(json)
# print the JSON string representation of the object
print(CustomerWishList.to_json())

# convert the object into a dict
customer_wish_list_dict = customer_wish_list_instance.to_dict()
# create an instance of CustomerWishList from a dict
customer_wish_list_from_dict = CustomerWishList.from_dict(customer_wish_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


