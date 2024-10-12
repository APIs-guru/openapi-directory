# OrderPreestimateShippingList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_email** | **str** | Retrieves orders specified by customer email | [optional] 
**customer_id** | **str** | Retrieves orders specified by customer id | [optional] 
**exclude** | **str** | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
**order_item** | [**List[OrderPreestimateShippingListOrderItemInner]**](OrderPreestimateShippingListOrderItemInner.md) |  | 
**params** | **str** | Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to 'force_all']
**shipp_address_1** | **str** | Specifies first shipping address | [optional] 
**shipp_city** | **str** | Specifies shipping city | [optional] 
**shipp_country** | **str** | Specifies shipping country code | 
**shipp_postcode** | **str** | Specifies shipping postcode | [optional] 
**shipp_state** | **str** | Specifies shipping state code | [optional] 
**store_id** | **str** | Store Id | [optional] 
**warehouse_id** | **str** | This parameter is used for selecting a warehouse where you need to set/modify a product quantity. | [optional] 

## Example

```python
from openapi_client.models.order_preestimate_shipping_list import OrderPreestimateShippingList

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPreestimateShippingList from a JSON string
order_preestimate_shipping_list_instance = OrderPreestimateShippingList.from_json(json)
# print the JSON string representation of the object
print(OrderPreestimateShippingList.to_json())

# convert the object into a dict
order_preestimate_shipping_list_dict = order_preestimate_shipping_list_instance.to_dict()
# create an instance of OrderPreestimateShippingList from a dict
order_preestimate_shipping_list_from_dict = OrderPreestimateShippingList.from_dict(order_preestimate_shipping_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


