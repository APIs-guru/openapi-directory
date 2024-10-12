# BillingProfileCreationRequest

The request parameters for creating a new billing profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDetails**](AddressDetails.md) |  | [optional] 
**display_name** | **str** | The billing profile name. | [optional] 
**enabled_azure_plans** | [**List[AzurePlan]**](AzurePlan.md) | Enabled azure plans for this billing profile. | [optional] 
**invoice_email_opt_in** | **bool** | If the billing profile is opted in to receive invoices via email. | [optional] 
**po_number** | **str** | Purchase order number. | [optional] 

## Example

```python
from openapi_client.models.billing_profile_creation_request import BillingProfileCreationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfileCreationRequest from a JSON string
billing_profile_creation_request_instance = BillingProfileCreationRequest.from_json(json)
# print the JSON string representation of the object
print(BillingProfileCreationRequest.to_json())

# convert the object into a dict
billing_profile_creation_request_dict = billing_profile_creation_request_instance.to_dict()
# create an instance of BillingProfileCreationRequest from a dict
billing_profile_creation_request_from_dict = BillingProfileCreationRequest.from_dict(billing_profile_creation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


