# Address

This type contains the details of a geographical address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; &lt;b&gt;addressLine1&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt; | [optional] 
**address_line2** | **str** | The second line of the street address. This field can be used for additional address information, such as a suite or apartment number. This field will be returned if defined for the shipping address.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; &lt;b&gt;addressLine2&lt;/b&gt; will not be returned for any order that is more than 90 days old.&lt;/span&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; As of January 31, 2022, &lt;b&gt;addressLine2&lt;/b&gt; no longer returns EU VAT tax information. To determine line-item level VAT tax information, refer to &lt;a href&#x3D;\&quot;#response.orders.lineItems.ebayCollectAndRemitTaxes.ebayReference\&quot;&gt;eBayReference&lt;/a&gt;.&lt;/span&gt; | [optional] 
**city** | **str** | The city of the shipping destination. | [optional] 
**country_code** | **str** | The country of the shipping destination, represented as a two-letter ISO 3166-1 alpha-2 country code. For example, &lt;code&gt;US&lt;/code&gt; represents the United States, and &lt;code&gt;DE&lt;/code&gt; represents Germany. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**county** | **str** | The county of the shipping destination. Counties typically, but not always, contain multiple cities or towns. This field is returned if known/available. | [optional] 
**postal_code** | **str** | The postal code of the shipping destination. Usually referred to as Zip codes in the US. Most countries have postal codes, but not all. The postal code will be returned if applicable. | [optional] 
**state_or_province** | **str** | The state or province of the shipping destination. Most countries have states or provinces, but not all. The state or province will be returned if applicable. | [optional] 

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


