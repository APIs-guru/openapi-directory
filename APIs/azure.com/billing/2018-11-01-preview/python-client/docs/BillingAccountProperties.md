# BillingAccountProperties

The properties of the billing account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | The billing account Type. | [optional] [readonly] 
**address** | [**Address**](Address.md) |  | [optional] 
**billing_profiles** | [**List[BillingProfile]**](BillingProfile.md) | The billing profiles associated to the billing account. By default this is not populated, unless it&#39;s specified in $expand. | [optional] 
**company** | **str** | Company Name. | [optional] [readonly] 
**country** | **str** | Country Name. | [optional] [readonly] 
**departments** | [**List[Department]**](Department.md) | The departments associated to the enrollment. | [optional] 
**display_name** | **str** | The billing account name. | [optional] [readonly] 
**enrollment_accounts** | [**List[EnrollmentAccount]**](EnrollmentAccount.md) | The accounts associated to the enrollment. | [optional] 
**enrollment_details** | [**Enrollment**](Enrollment.md) |  | [optional] 
**has_read_access** | **bool** | Specifies whether the user has read access on billing account. | [optional] [readonly] 
**invoice_sections** | [**List[InvoiceSection]**](InvoiceSection.md) | The invoice sections associated to the billing account. By default this is not populated, unless it&#39;s specified in $expand. | [optional] 

## Example

```python
from openapi_client.models.billing_account_properties import BillingAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAccountProperties from a JSON string
billing_account_properties_instance = BillingAccountProperties.from_json(json)
# print the JSON string representation of the object
print(BillingAccountProperties.to_json())

# convert the object into a dict
billing_account_properties_dict = billing_account_properties_instance.to_dict()
# create an instance of BillingAccountProperties from a dict
billing_account_properties_from_dict = BillingAccountProperties.from_dict(billing_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


