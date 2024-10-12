# Address

The type that defines the fields for an address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address. Note: This is conditionally returned in the itemLocation field. | [optional] 
**address_line2** | **str** | The second line of the street address. This field is not always used, but can be used for &#39;Suite Number&#39; or &#39;Apt Number&#39;. | [optional] 
**city** | **str** | The city of the address. | [optional] 
**country** | **str** | The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**county** | **str** | The county of the address. | [optional] 
**postal_code** | **str** | The postal code (or zip code in US) code of the address. Sellers set a postal code (or zip code in US) for items when they are listed. The postal code is used for calculating proximity searches. It is anonymized when returned in itemLocation.postalCode via the API. | [optional] 
**state_or_province** | **str** | The state or province of the address. Note: This is conditionally returned in the itemLocation field. | [optional] 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


