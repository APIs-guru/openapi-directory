# UpdateUpsSettingsRequestBody

An update UPS settings request body

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
from openapi_client.models.update_ups_settings_request_body import UpdateUpsSettingsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUpsSettingsRequestBody from a JSON string
update_ups_settings_request_body_instance = UpdateUpsSettingsRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateUpsSettingsRequestBody.to_json())

# convert the object into a dict
update_ups_settings_request_body_dict = update_ups_settings_request_body_instance.to_dict()
# create an instance of UpdateUpsSettingsRequestBody from a dict
update_ups_settings_request_body_from_dict = UpdateUpsSettingsRequestBody.from_dict(update_ups_settings_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


