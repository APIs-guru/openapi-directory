# LegalAddress

Type that defines the fields for the seller's address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address. | [optional] 
**address_line2** | **str** | The second line of the street address. This field is not always used, but can be used for &#39;Suite Number&#39; or &#39;Apt Number&#39;. | [optional] 
**city** | **str** | The city of the address. | [optional] 
**country** | **str** | The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**country_name** | **str** | The name of the country of the address. | [optional] 
**county** | **str** | The name of the county of the address. | [optional] 
**postal_code** | **str** | The postal code of the address. | [optional] 
**state_or_province** | **str** | The state or province of the address. | [optional] 

## Example

```python
from openapi_client.models.legal_address import LegalAddress

# TODO update the JSON string below
json = "{}"
# create an instance of LegalAddress from a JSON string
legal_address_instance = LegalAddress.from_json(json)
# print the JSON string representation of the object
print(LegalAddress.to_json())

# convert the object into a dict
legal_address_dict = legal_address_instance.to_dict()
# create an instance of LegalAddress from a dict
legal_address_from_dict = LegalAddress.from_dict(legal_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


