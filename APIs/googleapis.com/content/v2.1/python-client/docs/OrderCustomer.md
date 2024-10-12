# OrderCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **str** | Full name of the customer. | [optional] 
**invoice_receiving_email** | **str** | Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google. | [optional] 
**loyalty_info** | [**OrderCustomerLoyaltyInfo**](OrderCustomerLoyaltyInfo.md) |  | [optional] 
**marketing_rights_info** | [**OrderCustomerMarketingRightsInfo**](OrderCustomerMarketingRightsInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_customer import OrderCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCustomer from a JSON string
order_customer_instance = OrderCustomer.from_json(json)
# print the JSON string representation of the object
print(OrderCustomer.to_json())

# convert the object into a dict
order_customer_dict = order_customer_instance.to_dict()
# create an instance of OrderCustomer from a dict
order_customer_from_dict = OrderCustomer.from_dict(order_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


