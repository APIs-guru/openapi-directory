# InvoiceSectionWithCreateSubPermission

Invoice section properties with create subscription permission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_display_name** | **str** | Billing profile display name. | [optional] [readonly] 
**billing_profile_id** | **str** | Billing profile Id. | [optional] [readonly] 
**enabled_azure_plans** | [**List[AzurePlan]**](AzurePlan.md) | Enabled azure plans for the associated billing profile. | [optional] 
**invoice_section_display_name** | **str** | Invoice Section display name. | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice Section Id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoice_section_with_create_sub_permission import InvoiceSectionWithCreateSubPermission

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSectionWithCreateSubPermission from a JSON string
invoice_section_with_create_sub_permission_instance = InvoiceSectionWithCreateSubPermission.from_json(json)
# print the JSON string representation of the object
print(InvoiceSectionWithCreateSubPermission.to_json())

# convert the object into a dict
invoice_section_with_create_sub_permission_dict = invoice_section_with_create_sub_permission_instance.to_dict()
# create an instance of InvoiceSectionWithCreateSubPermission from a dict
invoice_section_with_create_sub_permission_from_dict = InvoiceSectionWithCreateSubPermission.from_dict(invoice_section_with_create_sub_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


