# CustomerFieldsWithPassword


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**email** | **str** | Email of the Customer | [optional] 
**id** | **int** | Unique identifier of the Customer | [optional] 
**password** | **str** | Password | [optional] 
**phone** | **str** | Phone of the Customer | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**status** | **str** | Status of the Customer | [optional] 

## Example

```python
from openapi_client.models.customer_fields_with_password import CustomerFieldsWithPassword

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFieldsWithPassword from a JSON string
customer_fields_with_password_instance = CustomerFieldsWithPassword.from_json(json)
# print the JSON string representation of the object
print(CustomerFieldsWithPassword.to_json())

# convert the object into a dict
customer_fields_with_password_dict = customer_fields_with_password_instance.to_dict()
# create an instance of CustomerFieldsWithPassword from a dict
customer_fields_with_password_from_dict = CustomerFieldsWithPassword.from_dict(customer_fields_with_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


