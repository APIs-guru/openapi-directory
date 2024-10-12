# AddMerchantMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**alt_phone_number** | **str** | The Business or Merchant&#39;s alternate phone number. | [optional] 
**cat_flag** | **str** | Cardholder-activated terminal indicator. | 
**comments** | **str** | Brief comments on why Merchant is added | [optional] 
**country_subdivision_tax_id** | **str** | The Merchant&#39;s state tax ID; for the U.S region only. Return value will be hidden. | 
**date_closed** | **str** | Date the agreement was terminated with the merchant | 
**date_opened** | **str** | Date the merchant entered into agreement with the acquirer | 
**doing_business_as_name** | **str** | The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop | [optional] 
**merchant_category** | **str** | A classification code used in authorization, clearing, and other transactions or reports to identify the type of merchant. | 
**merchant_id** | **str** | The identifier assigned to a merchant by an Acquirer. An Acquirer Id and Merchant Id combination must be unique. | 
**name** | **str** | The name of the Business which has been terminated. | 
**national_tax_id** | **str** | The National tax ID or business registration number. Return value will be hidden. | [optional] 
**phone_number** | **str** | The Business or Merchant&#39;s phone number. | 
**principal** | [**Principal**](Principal.md) |  | [optional] 
**reason_code** | **str** | A two digit numeric code indication why a particular merchant was terminated.  01   Account Data Compromise, 02   Common Points of Purchase, 03   Laundering, 04   Excessive Chargebacks, 05   Excessive Fraud, 06   Reserved for Future Use, 07   Fraud Conviction, 08   MasterCard Questionable Merchant Audit Program, 09   Bankruptcy/Liquidation/Insolvency, 10   Violation of MasterCard Standards, 11   Merchant collusion, 12   PCI Data Security Standard, Noncompliance, 13   Illegal Transactions, 14   Identity Theft | 
**service_prov_dba** | **str** | The name of the service provider associated with the merchant listed in the MATCH. | [optional] 
**service_prov_legal** | **str** | The name of the service provider associated with the merchant listed in the MATCH. | [optional] 
**url** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.add_merchant_merchant import AddMerchantMerchant

# TODO update the JSON string below
json = "{}"
# create an instance of AddMerchantMerchant from a JSON string
add_merchant_merchant_instance = AddMerchantMerchant.from_json(json)
# print the JSON string representation of the object
print(AddMerchantMerchant.to_json())

# convert the object into a dict
add_merchant_merchant_dict = add_merchant_merchant_instance.to_dict()
# create an instance of AddMerchantMerchant from a dict
add_merchant_merchant_from_dict = AddMerchantMerchant.from_dict(add_merchant_merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


