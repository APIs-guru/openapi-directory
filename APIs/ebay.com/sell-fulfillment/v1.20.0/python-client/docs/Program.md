# Program

This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program or eBay shipping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticity_verification** | [**PostSaleAuthenticationProgram**](PostSaleAuthenticationProgram.md) |  | [optional] 
**ebay_international_shipping** | [**EbayInternationalShipping**](EbayInternationalShipping.md) |  | [optional] 
**ebay_shipping** | [**EbayShipping**](EbayShipping.md) |  | [optional] 
**ebay_vault** | [**EbayVaultProgram**](EbayVaultProgram.md) |  | [optional] 
**fulfillment_program** | [**EbayFulfillmentProgram**](EbayFulfillmentProgram.md) |  | [optional] 

## Example

```python
from openapi_client.models.program import Program

# TODO update the JSON string below
json = "{}"
# create an instance of Program from a JSON string
program_instance = Program.from_json(json)
# print the JSON string representation of the object
print(Program.to_json())

# convert the object into a dict
program_dict = program_instance.to_dict()
# create an instance of Program from a dict
program_from_dict = Program.from_dict(program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


