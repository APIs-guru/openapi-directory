# BillingProfileProperties

The properties of the billing profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDetails**](AddressDetails.md) |  | [optional] 
**currency** | **str** | The currency associated with the billing profile. | [optional] [readonly] 
**display_name** | **str** | The billing profile name. | [optional] 
**enabled_azure_plans** | [**List[AzurePlan]**](AzurePlan.md) | Information about the enabled azure plans. | [optional] 
**invoice_day** | **int** | Invoice day. | [optional] [readonly] 
**invoice_email_opt_in** | **bool** | If the billing profile is opted in to receive invoices via email. | [optional] 
**invoice_sections** | [**List[InvoiceSection]**](InvoiceSection.md) | The invoice sections associated to the billing profile. | [optional] 
**po_number** | **str** | Purchase order number. | [optional] 

## Example

```python
from openapi_client.models.billing_profile_properties import BillingProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfileProperties from a JSON string
billing_profile_properties_instance = BillingProfileProperties.from_json(json)
# print the JSON string representation of the object
print(BillingProfileProperties.to_json())

# convert the object into a dict
billing_profile_properties_dict = billing_profile_properties_instance.to_dict()
# create an instance of BillingProfileProperties from a dict
billing_profile_properties_from_dict = BillingProfileProperties.from_dict(billing_profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


