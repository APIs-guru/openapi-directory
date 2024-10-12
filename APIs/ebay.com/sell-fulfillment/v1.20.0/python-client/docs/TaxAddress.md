# TaxAddress

This container consists of address information that can be used by sellers for tax purpose.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city name that can be used by sellers for tax purpose. | [optional] 
**country_code** | **str** | The country code that can be used by sellers for tax purpose, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, &lt;strong&gt;US&lt;/strong&gt; represents the United States, and &lt;strong&gt;DE&lt;/strong&gt; represents Germany. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**postal_code** | **str** | The postal code that can be used by sellers for tax purpose. Usually referred to as Zip codes in the US. | [optional] 
**state_or_province** | **str** | The state name that can be used by sellers for tax purpose. | [optional] 

## Example

```python
from openapi_client.models.tax_address import TaxAddress

# TODO update the JSON string below
json = "{}"
# create an instance of TaxAddress from a JSON string
tax_address_instance = TaxAddress.from_json(json)
# print the JSON string representation of the object
print(TaxAddress.to_json())

# convert the object into a dict
tax_address_dict = tax_address_instance.to_dict()
# create an instance of TaxAddress from a dict
tax_address_from_dict = TaxAddress.from_dict(tax_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


