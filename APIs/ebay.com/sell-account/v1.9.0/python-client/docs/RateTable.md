# RateTable

This type is used to provide details about each shipping rate table that is returned in the <b>getRateTables</b> response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | A two-letter &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html \&quot; title&#x3D;\&quot;https://www.iso.org \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 3166&lt;/a&gt; country code representing the eBay marketplace where the shipping rate table is defined. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**locality** | **str** | This enumeration value returned here indicates whether the shipping rate table is a domestic or international shipping rate table. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**name** | **str** | The seller-defined name for the shipping rate table. | [optional] 
**rate_table_id** | **str** | A unique eBay-assigned ID for a seller&#39;s shipping rate table. These &lt;b&gt;rateTableId&lt;/b&gt; values are used to associate shipping rate tables to fulfillment business policies or directly to listings through an add/revise/relist call in the Trading API. | [optional] 

## Example

```python
from openapi_client.models.rate_table import RateTable

# TODO update the JSON string below
json = "{}"
# create an instance of RateTable from a JSON string
rate_table_instance = RateTable.from_json(json)
# print the JSON string representation of the object
print(RateTable.to_json())

# convert the object into a dict
rate_table_dict = rate_table_instance.to_dict()
# create an instance of RateTable from a dict
rate_table_from_dict = RateTable.from_dict(rate_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


