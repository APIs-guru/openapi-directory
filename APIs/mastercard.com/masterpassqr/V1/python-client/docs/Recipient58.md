# Recipient58

Information about the recipient/merchant of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData60**](AdditionalMerchantData60.md) |  | [optional] 
**address** | [**Address59**](Address59.md) |  | [optional] 
**email** | **str** | Email address of the recipient/merchant. | [optional] 
**first_name** | **str** | First name of the recipient/merchant. | [optional] 
**last_name** | **str** | Last name of the recipient/merchant. | [optional] 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. | [optional] 
**middle_name** | **str** | Middle name of the recipient/merchant. | [optional] 
**phone** | **str** | Phone number of the recipient/merchant. | [optional] 

## Example

```python
from openapi_client.models.recipient58 import Recipient58

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient58 from a JSON string
recipient58_instance = Recipient58.from_json(json)
# print the JSON string representation of the object
print(Recipient58.to_json())

# convert the object into a dict
recipient58_dict = recipient58_instance.to_dict()
# create an instance of Recipient58 from a dict
recipient58_from_dict = Recipient58.from_dict(recipient58_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


