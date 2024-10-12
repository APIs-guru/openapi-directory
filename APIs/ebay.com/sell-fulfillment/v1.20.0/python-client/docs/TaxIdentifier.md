# TaxIdentifier

This type is used by the <strong>taxIdentifier</strong> container that is returned in <strong>getOrder</strong>. The <strong>taxIdentifier</strong> container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces.<br><br><span class=\"tablenote\"><strong>Note:</strong> Currently, the <strong>taxIdentifier</strong> container is only returned in <strong>getOrder</strong> and not in <strong>getOrders</strong>. So, if a seller wanted to view a buyer's tax information for a particular order returned in <strong>getOrders</strong>, that seller would need to use the <strong>orderId</strong> value for that particular order, and then run a <strong>getOrder</strong> call against that order ID. </span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuing_country** | **str** | This two-letter code indicates the country that issued the buyer&#39;s tax ID. The country that the two-letter code represents can be found in the &lt;strong&gt;CountryCodeEnum&lt;/strong&gt; type, or in the  &lt;a href&#x3D;\&quot;https://www.iso.org/iso-3166-country-codes.html \&quot;&gt;ISO 3166&lt;/a&gt; standard. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**tax_identifier_type** | **str** | This enumeration value indicates the type of tax identification being used for the buyer. The different tax types are defined in the &lt;strong&gt;TaxIdentifierTypeEnum&lt;/strong&gt; type. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxIdentifierTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**taxpayer_id** | **str** | This value is the unique tax ID associated with the buyer. The type of tax identification is shown in the &lt;strong&gt;taxIdentifierType&lt;/strong&gt; field. | [optional] 

## Example

```python
from openapi_client.models.tax_identifier import TaxIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of TaxIdentifier from a JSON string
tax_identifier_instance = TaxIdentifier.from_json(json)
# print the JSON string representation of the object
print(TaxIdentifier.to_json())

# convert the object into a dict
tax_identifier_dict = tax_identifier_instance.to_dict()
# create an instance of TaxIdentifier from a dict
tax_identifier_from_dict = TaxIdentifier.from_dict(tax_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


