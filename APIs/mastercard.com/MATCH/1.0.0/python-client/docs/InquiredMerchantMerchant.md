# InquiredMerchantMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_by_acquirer_id** | **str** | The Member ICA that has added the merchant to the MATCH system | [optional] 
**added_on_date** | **str** | The date on which the merchant was added to the MATCH system. Format MM/DD/YYYY | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**alt_phone_number** | **str** | The Business or Merchant&#39;s alternate phone number. | [optional] 
**country_subdivision_tax_id** | **str** | The Merchant&#39;s state tax ID; for the U.S region only. Return value will be hidden. | [optional] 
**doing_business_as_name** | **str** | The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop | [optional] 
**merchant_match** | [**MerchantMatch**](MerchantMatch.md) |  | [optional] 
**name** | **str** | The name of the Business which has been terminated. | [optional] 
**national_tax_id** | **str** | The National tax ID or business registration number. Return value will be hidden. | [optional] 
**phone_number** | **str** | The Business or Merchant&#39;s phone number. | [optional] 
**principal** | [**Principal**](Principal.md) |  | [optional] 
**service_prov_dba** | **str** | The name of the service provider associated with the merchant listed in the MATCH. | [optional] 
**service_prov_legal** | **str** | The name of the service provider associated with the merchant listed in the MATCH. | [optional] 
**termination_reason_code** | **str** | A two digit numeric code indication why a particular merchant was terminated.  01   Account Data Compromise, 02   Common Points of Purchase, 03   Laundering, 04   Excessive Chargebacks, 05   Excessive Fraud, 06   Reserved for Future Use, 07   Fraud Conviction, 08   MasterCard Questionable Merchant Audit Program, 09   Bankruptcy/Liquidation/Insolvency, 10   Violation of MasterCard Standards, 11   Merchant collusion, 12   PCI Data Security Standard, Noncompliance, 13   Illegal Transactions, 14   Identity Theft | [optional] 
**url_group** | [**UrlGroup**](UrlGroup.md) |  | [optional] 

## Example

```python
from openapi_client.models.inquired_merchant_merchant import InquiredMerchantMerchant

# TODO update the JSON string below
json = "{}"
# create an instance of InquiredMerchantMerchant from a JSON string
inquired_merchant_merchant_instance = InquiredMerchantMerchant.from_json(json)
# print the JSON string representation of the object
print(InquiredMerchantMerchant.to_json())

# convert the object into a dict
inquired_merchant_merchant_dict = inquired_merchant_merchant_instance.to_dict()
# create an instance of InquiredMerchantMerchant from a dict
inquired_merchant_merchant_from_dict = InquiredMerchantMerchant.from_dict(inquired_merchant_merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


