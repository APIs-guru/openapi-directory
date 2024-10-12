# CustomerUpdateAddressInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_book_address1** | **str** | Specifies customer&#39;s first address in the address book | [optional] 
**address_book_address2** | **str** | Specifies customer&#39;s second address in the address book | [optional] 
**address_book_city** | **str** | Specifies customer&#39;s city in the address book | [optional] 
**address_book_company** | **str** | Specifies customer&#39;s company name in the address book | [optional] 
**address_book_country** | **str** | ISO code or name of country | [optional] 
**address_book_default** | **bool** | Defines whether the address is used by default | [optional] 
**address_book_fax** | **str** | Specifies customer&#39;s fax in the address book | [optional] 
**address_book_first_name** | **str** | Specifies customer&#39;s first name in the address book | [optional] 
**address_book_id** | **str** | The ID of the address. | [optional] 
**address_book_identification_number** | **str** | The national ID card number of this person, or a unique tax identification number. | [optional] 
**address_book_last_name** | **str** | Specifies customer&#39;s last name in the address book | [optional] 
**address_book_phone** | **str** | Specifies customer&#39;s phone number in the address book | [optional] 
**address_book_phone_mobile** | **str** | Specifies customer&#39;s mobile phone number in the address book | [optional] 
**address_book_postcode** | **str** | Specifies customer&#39;s postcode | [optional] 
**address_book_state** | **str** | ISO code or name of state. | [optional] 
**address_book_tax_id** | **str** | Add Tax Id | [optional] 
**address_book_type** | **str** | Specifies customer&#39;s address type | [optional] 

## Example

```python
from openapi_client.models.customer_update_address_inner import CustomerUpdateAddressInner

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUpdateAddressInner from a JSON string
customer_update_address_inner_instance = CustomerUpdateAddressInner.from_json(json)
# print the JSON string representation of the object
print(CustomerUpdateAddressInner.to_json())

# convert the object into a dict
customer_update_address_inner_dict = customer_update_address_inner_instance.to_dict()
# create an instance of CustomerUpdateAddressInner from a dict
customer_update_address_inner_from_dict = CustomerUpdateAddressInner.from_dict(customer_update_address_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


