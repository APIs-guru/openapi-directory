# EcommerceCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[AddressesInner]**](AddressesInner.md) | An array of addresses for the customer. | [optional] 
**company_name** | **str** | Company name of the customer | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**emails** | [**List[Email]**](Email.md) | An array of email addresses for the customer. | [optional] 
**first_name** | **str** | First name of the customer | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**last_name** | **str** | Last name of the customer | [optional] 
**name** | **str** | Full name of the customer | [optional] 
**orders** | [**List[LinkedEcommerceOrder]**](LinkedEcommerceOrder.md) |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | An array of phone numbers for the customer. | [optional] 
**status** | **str** | The current status of the customer | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ecommerce_customer import EcommerceCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceCustomer from a JSON string
ecommerce_customer_instance = EcommerceCustomer.from_json(json)
# print the JSON string representation of the object
print(EcommerceCustomer.to_json())

# convert the object into a dict
ecommerce_customer_dict = ecommerce_customer_instance.to_dict()
# create an instance of EcommerceCustomer from a dict
ecommerce_customer_from_dict = EcommerceCustomer.from_dict(ecommerce_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


