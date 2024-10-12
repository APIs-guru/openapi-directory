# ReturnAddress

This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address. | [optional] 
**address_line2** | **str** | The second line of the street address. This line is not always necessarily, but is often used for apartment number or suite number, or other relevant information that can not fit on the first line. | [optional] 
**city** | **str** | The city of the return address. | [optional] 
**country** | **str** | The country&#39;s two-digt, ISO 3166-1 country code. See the enumeration type for a country&#39;s value. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**county** | **str** | The county of the return address. Counties are not applicable to all countries. | [optional] 
**full_name** | **str** | The full name of return address owner. | [optional] 
**postal_code** | **str** | The postal code of the return address. | [optional] 
**primary_phone** | [**Phone**](Phone.md) |  | [optional] 
**state_or_province** | **str** | The state or province of the return address. | [optional] 

## Example

```python
from openapi_client.models.return_address import ReturnAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnAddress from a JSON string
return_address_instance = ReturnAddress.from_json(json)
# print the JSON string representation of the object
print(ReturnAddress.to_json())

# convert the object into a dict
return_address_dict = return_address_instance.to_dict()
# create an instance of ReturnAddress from a dict
return_address_from_dict = ReturnAddress.from_dict(return_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


