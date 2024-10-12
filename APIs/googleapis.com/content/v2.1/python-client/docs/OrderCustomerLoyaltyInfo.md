# OrderCustomerLoyaltyInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyalty_number** | **str** | The loyalty card/membership number. | [optional] 
**name** | **str** | Name of card/membership holder, this field will be populated when | [optional] 

## Example

```python
from openapi_client.models.order_customer_loyalty_info import OrderCustomerLoyaltyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCustomerLoyaltyInfo from a JSON string
order_customer_loyalty_info_instance = OrderCustomerLoyaltyInfo.from_json(json)
# print the JSON string representation of the object
print(OrderCustomerLoyaltyInfo.to_json())

# convert the object into a dict
order_customer_loyalty_info_dict = order_customer_loyalty_info_instance.to_dict()
# create an instance of OrderCustomerLoyaltyInfo from a dict
order_customer_loyalty_info_from_dict = OrderCustomerLoyaltyInfo.from_dict(order_customer_loyalty_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


