# WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus

The status of the last successful slot swap operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_slot_name** | **str** | The destination slot of the last swap operation. | [optional] [readonly] 
**source_slot_name** | **str** | The source slot of the last swap operation. | [optional] [readonly] 
**timestamp_utc** | **datetime** | The time the last successful slot swap completed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_slot_swap_status import WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus from a JSON string
web_apps_list200_response_value_inner_properties_slot_swap_status_instance = WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_slot_swap_status_dict = web_apps_list200_response_value_inner_properties_slot_swap_status_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus from a dict
web_apps_list200_response_value_inner_properties_slot_swap_status_from_dict = WebAppsList200ResponseValueInnerPropertiesSlotSwapStatus.from_dict(web_apps_list200_response_value_inner_properties_slot_swap_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


