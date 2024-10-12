# UpdateCarrierSettingsRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_account** | **bool** | Indicates if this is the primary UPS account | [optional] 
**nickname** | **str** | nickname | [optional] 
**should_hide_account_number_on_archive_doc** | **bool** | Indicates if the account number should be hidden on the archive documentation | [optional] 
**letterhead_image** | **str** |  | [optional] 
**pickup_type** | [**UpsPickupType**](UpsPickupType.md) |  | [optional] 
**signature_image** | **str** |  | [optional] 
**smart_post_endorsement** | [**AncillaryServiceEndorsement**](AncillaryServiceEndorsement.md) |  | [optional] 
**smart_post_hub** | [**SmartPostHub**](SmartPostHub.md) |  | [optional] 
**include_barcode_with_order_number** | **bool** |  | [optional] 
**receive_email_on_manifest_processing** | **bool** |  | [optional] 
**account_postal_code** | **str** | account postal code | [optional] 
**invoice** | [**UpsInvoice**](UpsInvoice.md) | The invoice | [optional] 
**mail_innovations_cost_center** | **str** | mail innovations cost center | [optional] 
**mail_innovations_endorsement** | [**AncillaryServiceEndorsement**](AncillaryServiceEndorsement.md) |  | [optional] 
**use_carbon_neutral_shipping_program** | **bool** | The use carbon neutral shipping program | [optional] 
**use_consolidation_services** | **bool** | The use consolidation services | [optional] 
**use_ground_freight_pricing** | **bool** | The use ground freight pricing | [optional] 
**use_negotiated_rates** | **bool** | The use negotiated rates | [optional] 
**use_order_number_on_mail_innovations_labels** | **bool** | The use order number on mail innovations labels | [optional] 
**email** | **str** | Email | [optional] 

## Example

```python
from openapi_client.models.update_carrier_settings_request_body import UpdateCarrierSettingsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCarrierSettingsRequestBody from a JSON string
update_carrier_settings_request_body_instance = UpdateCarrierSettingsRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateCarrierSettingsRequestBody.to_json())

# convert the object into a dict
update_carrier_settings_request_body_dict = update_carrier_settings_request_body_instance.to_dict()
# create an instance of UpdateCarrierSettingsRequestBody from a dict
update_carrier_settings_request_body_from_dict = UpdateCarrierSettingsRequestBody.from_dict(update_carrier_settings_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


