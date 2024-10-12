# BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_has_vat_id** | **bool** |  | [optional] 
**eu_delivery_threshold_exceeded** | **bool** |  | [optional] 
**is_distance_sale** | **bool** |  | [optional] 
**order_distribution_country_is_empty** | **bool** |  | [optional] 
**oss_enabled** | **bool** |  | [optional] 
**rates_from** | **str** |  | [optional] 
**seller_is_registered_in_dst_country** | **bool** |  | [optional] 
**set_igl_when_vat_id_is_available_enabled** | **bool** |  | [optional] 
**src_country_is_equal_to_dst_country** | **bool** |  | [optional] 
**third_party_country** | **bool** |  | [optional] 
**user_profile_country_is_empty** | **bool** |  | [optional] 
**vat_id_from** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_order_vat_details_recognized_history_entry_vat_detection_flags import BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags from a JSON string
billbee_interfaces_order_vat_details_recognized_history_entry_vat_detection_flags_instance = BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags.to_json())

# convert the object into a dict
billbee_interfaces_order_vat_details_recognized_history_entry_vat_detection_flags_dict = billbee_interfaces_order_vat_details_recognized_history_entry_vat_detection_flags_instance.to_dict()
# create an instance of BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags from a dict
billbee_interfaces_order_vat_details_recognized_history_entry_vat_detection_flags_from_dict = BillbeeInterfacesOrderVatDetailsRecognizedHistoryEntryVatDetectionFlags.from_dict(billbee_interfaces_order_vat_details_recognized_history_entry_vat_detection_flags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


