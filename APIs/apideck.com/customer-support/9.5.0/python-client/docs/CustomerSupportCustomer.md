# CustomerSupportCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**bank_accounts** | [**BankAccount**](BankAccount.md) |  | [optional] 
**company_name** | **str** | The name of the company. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**individual** | **bool** |  | [optional] 
**last_name** | **str** | The last name of the person. | [optional] 
**notes** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**status** | **str** | Customer status | [optional] 
**tax_number** | **str** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.customer_support_customer import CustomerSupportCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSupportCustomer from a JSON string
customer_support_customer_instance = CustomerSupportCustomer.from_json(json)
# print the JSON string representation of the object
print(CustomerSupportCustomer.to_json())

# convert the object into a dict
customer_support_customer_dict = customer_support_customer_instance.to_dict()
# create an instance of CustomerSupportCustomer from a dict
customer_support_customer_from_dict = CustomerSupportCustomer.from_dict(customer_support_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


