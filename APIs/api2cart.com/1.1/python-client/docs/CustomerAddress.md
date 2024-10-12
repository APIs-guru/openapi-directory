# CustomerAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**address1** | **str** |  | [optional] 
**address2** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**company** | **str** |  | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**default** | **bool** |  | [optional] 
**fax** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**identification_number** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**phone_mobile** | **str** |  | [optional] 
**postcode** | **str** |  | [optional] 
**region** | **str** |  | [optional] 
**state** | [**State**](State.md) |  | [optional] 
**tax_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_address import CustomerAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAddress from a JSON string
customer_address_instance = CustomerAddress.from_json(json)
# print the JSON string representation of the object
print(CustomerAddress.to_json())

# convert the object into a dict
customer_address_dict = customer_address_instance.to_dict()
# create an instance of CustomerAddress from a dict
customer_address_from_dict = CustomerAddress.from_dict(customer_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


