# CustomerFieldsWithBillingAddressAndShippingAddressFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**id** | **int** | Unique identifier of the Customer | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_fields_with_billing_address_and_shipping_address_fields import CustomerFieldsWithBillingAddressAndShippingAddressFields

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFieldsWithBillingAddressAndShippingAddressFields from a JSON string
customer_fields_with_billing_address_and_shipping_address_fields_instance = CustomerFieldsWithBillingAddressAndShippingAddressFields.from_json(json)
# print the JSON string representation of the object
print(CustomerFieldsWithBillingAddressAndShippingAddressFields.to_json())

# convert the object into a dict
customer_fields_with_billing_address_and_shipping_address_fields_dict = customer_fields_with_billing_address_and_shipping_address_fields_instance.to_dict()
# create an instance of CustomerFieldsWithBillingAddressAndShippingAddressFields from a dict
customer_fields_with_billing_address_and_shipping_address_fields_from_dict = CustomerFieldsWithBillingAddressAndShippingAddressFields.from_dict(customer_fields_with_billing_address_and_shipping_address_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


