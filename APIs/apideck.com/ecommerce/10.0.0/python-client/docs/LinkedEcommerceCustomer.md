# LinkedEcommerceCustomer

The customer this entity is linked to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | Company name of the customer | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**first_name** | **str** | First name of the customer | [optional] 
**id** | **str** | The ID of the customer this entity is linked to. | 
**last_name** | **str** | Last name of the customer | [optional] 
**name** | **str** | Full name of the customer | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 

## Example

```python
from openapi_client.models.linked_ecommerce_customer import LinkedEcommerceCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedEcommerceCustomer from a JSON string
linked_ecommerce_customer_instance = LinkedEcommerceCustomer.from_json(json)
# print the JSON string representation of the object
print(LinkedEcommerceCustomer.to_json())

# convert the object into a dict
linked_ecommerce_customer_dict = linked_ecommerce_customer_instance.to_dict()
# create an instance of LinkedEcommerceCustomer from a dict
linked_ecommerce_customer_from_dict = LinkedEcommerceCustomer.from_dict(linked_ecommerce_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


