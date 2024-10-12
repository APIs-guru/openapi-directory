# BillingProfile

Contains properties of a Campaign Manager Billing Profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consolidated_invoice** | **bool** | Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level. | [optional] 
**country_code** | **str** | Country code of this billing profile.This is a read-only field. | [optional] 
**currency_code** | **str** | Billing currency code in ISO 4217 format.This is a read-only field. | [optional] 
**id** | **str** | ID of this billing profile. This is a read-only, auto-generated field. | [optional] 
**invoice_level** | **str** | Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign. | [optional] 
**is_default** | **bool** | True if the billing profile is the account default profile. This is a read-only field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#billingProfile\&quot;. | [optional] 
**name** | **str** | Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account. | [optional] 
**payments_account_id** | **str** | The ID of the payment account the billing profile belongs to. This is a read-only field. | [optional] 
**payments_customer_id** | **str** | The ID of the payment customer the billing profile belongs to. This is a read-only field. | [optional] 
**purchase_order** | **str** | Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile. | [optional] 
**secondary_payments_customer_id** | **str** | The ID of the secondary payment customer the billing profile belongs to. This is a read-only field. | [optional] 
**status** | **str** | Status of this billing profile.This is a read-only field. | [optional] 

## Example

```python
from openapi_client.models.billing_profile import BillingProfile

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfile from a JSON string
billing_profile_instance = BillingProfile.from_json(json)
# print the JSON string representation of the object
print(BillingProfile.to_json())

# convert the object into a dict
billing_profile_dict = billing_profile_instance.to_dict()
# create an instance of BillingProfile from a dict
billing_profile_from_dict = BillingProfile.from_dict(billing_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


