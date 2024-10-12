# MerchantCenterDestination

\"Merchant Center Destination\" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_settings** | [**AttributionSettings**](AttributionSettings.md) |  | [optional] 
**currency_code** | **str** | Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center. | [optional] 
**destination_id** | **str** | Output only. Merchant Center Destination ID. | [optional] [readonly] 
**display_name** | **str** | Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters. | [optional] 

## Example

```python
from openapi_client.models.merchant_center_destination import MerchantCenterDestination

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantCenterDestination from a JSON string
merchant_center_destination_instance = MerchantCenterDestination.from_json(json)
# print the JSON string representation of the object
print(MerchantCenterDestination.to_json())

# convert the object into a dict
merchant_center_destination_dict = merchant_center_destination_instance.to_dict()
# create an instance of MerchantCenterDestination from a dict
merchant_center_destination_from_dict = MerchantCenterDestination.from_dict(merchant_center_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


