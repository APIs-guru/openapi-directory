# ContactAddress

This complex type specifies the details of a geographical address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | The first line of the street address. | [optional] 
**address_line2** | **str** | The second line of the street address. Use this field for additional address information, such as a suite or apartment number. | [optional] 
**city** | **str** | The city in which the address is located. | [optional] 
**country_code** | **str** | The country of the address, represented as two-letter &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html\&quot; title&#x3D;\&quot;https://www.iso.org\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 3166&lt;/a&gt; country code. For example, &lt;code&gt;US&lt;/code&gt; represents the United States and &lt;code&gt;DE&lt;/code&gt; represents Germany. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**county** | **str** | The county (not country) in which the address is located. Counties typically contain multiple cities or towns. | [optional] 
**postal_code** | **str** | The postal code of the address. | [optional] 
**state_or_province** | **str** | The state or province in which the address is located. States and provinces often contain multiple counties. | [optional] 

## Example

```python
from openapi_client.models.contact_address import ContactAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ContactAddress from a JSON string
contact_address_instance = ContactAddress.from_json(json)
# print the JSON string representation of the object
print(ContactAddress.to_json())

# convert the object into a dict
contact_address_dict = contact_address_instance.to_dict()
# create an instance of ContactAddress from a dict
contact_address_from_dict = ContactAddress.from_dict(contact_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


