# BillingProfileCreationParameters

The parameters for creating a new billing profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**display_name** | **str** | The billing profile name. | [optional] 
**enable_azure_skus** | [**List[EnabledAzureSKUs]**](EnabledAzureSKUs.md) | Azure skus to enable for this billing profile.. | [optional] 
**invoice_email_opt_in** | **bool** | If the billing profile is opted in to receive invoices via email. | [optional] 
**po_number** | **str** | Purchase order number. | [optional] 

## Example

```python
from openapi_client.models.billing_profile_creation_parameters import BillingProfileCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfileCreationParameters from a JSON string
billing_profile_creation_parameters_instance = BillingProfileCreationParameters.from_json(json)
# print the JSON string representation of the object
print(BillingProfileCreationParameters.to_json())

# convert the object into a dict
billing_profile_creation_parameters_dict = billing_profile_creation_parameters_instance.to_dict()
# create an instance of BillingProfileCreationParameters from a dict
billing_profile_creation_parameters_from_dict = BillingProfileCreationParameters.from_dict(billing_profile_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


