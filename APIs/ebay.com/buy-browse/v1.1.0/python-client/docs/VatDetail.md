# VatDetail

The type the defines the fields for the VAT (value add tax) information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuing_country** | **str** | The two-letter ISO 3166 standard of the country issuing the seller&#39;s VAT (value added tax) ID. VAT is a tax added by some European countries. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CountryCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**vat_id** | **str** | The seller&#39;s VAT (value added tax) ID. VAT is a tax added by some European countries. | [optional] 

## Example

```python
from openapi_client.models.vat_detail import VatDetail

# TODO update the JSON string below
json = "{}"
# create an instance of VatDetail from a JSON string
vat_detail_instance = VatDetail.from_json(json)
# print the JSON string representation of the object
print(VatDetail.to_json())

# convert the object into a dict
vat_detail_dict = vat_detail_instance.to_dict()
# create an instance of VatDetail from a dict
vat_detail_from_dict = VatDetail.from_dict(vat_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


