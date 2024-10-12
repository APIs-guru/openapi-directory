# EcommerceAddress

An object representing a shipping or billing address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the billing address. | [optional] 
**company_name** | **str** | Company name of the customer | [optional] 
**country** | **str** | Country of the billing address. | [optional] 
**line1** | **str** | Address line 1 of the billing address. | [optional] 
**line2** | **str** | Address line 2 of the billing address. | [optional] 
**postal_code** | **str** | Postal/ZIP code of the billing address. | [optional] 
**state** | **str** | State/province of the billing address. | [optional] 

## Example

```python
from openapi_client.models.ecommerce_address import EcommerceAddress

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceAddress from a JSON string
ecommerce_address_instance = EcommerceAddress.from_json(json)
# print the JSON string representation of the object
print(EcommerceAddress.to_json())

# convert the object into a dict
ecommerce_address_dict = ecommerce_address_instance.to_dict()
# create an instance of EcommerceAddress from a dict
ecommerce_address_from_dict = EcommerceAddress.from_dict(ecommerce_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


