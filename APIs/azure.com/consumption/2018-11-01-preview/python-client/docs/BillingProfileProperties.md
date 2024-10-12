# BillingProfileProperties

The properties of the billing profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_address** | [**Address**](Address.md) |  | [optional] 
**billing_contact** | **str** | Billing contact. | [optional] [readonly] 
**currency** | **str** | Currency on the billing profile. | [optional] [readonly] 
**display_name** | **str** | The billing profile name. | [optional] 
**email_invoice** | **bool** | Email invoice. | [optional] [readonly] 
**invoice_day** | **int** | Invoice day. | [optional] [readonly] 
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


