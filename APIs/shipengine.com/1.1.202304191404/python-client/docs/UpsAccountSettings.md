# UpsAccountSettings

UPS account settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_postal_code** | **str** | account postal code | [optional] 
**invoice** | [**UpsInvoice**](UpsInvoice.md) | The invoice | [optional] 
**is_primary_account** | **bool** | Indicates if this is the primary UPS account | [optional] 
**mail_innovations_cost_center** | **str** | mail innovations cost center | [optional] 
**mail_innovations_endorsement** | [**AncillaryServiceEndorsement**](AncillaryServiceEndorsement.md) |  | [optional] 
**nickname** | **str** | nickname | [optional] 
**pickup_type** | [**UpsPickupType**](UpsPickupType.md) |  | [optional] 
**use_carbon_neutral_shipping_program** | **bool** | The use carbon neutral shipping program | [optional] 
**use_consolidation_services** | **bool** | The use consolidation services | [optional] 
**use_ground_freight_pricing** | **bool** | The use ground freight pricing | [optional] 
**use_negotiated_rates** | **bool** | The use negotiated rates | [optional] 
**use_order_number_on_mail_innovations_labels** | **bool** | The use order number on mail innovations labels | [optional] 

## Example

```python
from openapi_client.models.ups_account_settings import UpsAccountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpsAccountSettings from a JSON string
ups_account_settings_instance = UpsAccountSettings.from_json(json)
# print the JSON string representation of the object
print(UpsAccountSettings.to_json())

# convert the object into a dict
ups_account_settings_dict = ups_account_settings_instance.to_dict()
# create an instance of UpsAccountSettings from a dict
ups_account_settings_from_dict = UpsAccountSettings.from_dict(ups_account_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


