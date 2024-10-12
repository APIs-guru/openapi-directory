# GuaranteedOrderStatus

The status settings of the guaranteed order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_status** | **str** | Output only. The configuration status of the guaranteed order. Acceptable values are &#x60;PENDING&#x60; and &#x60;COMPLETED&#x60;. A guaranteed order must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. Currently the configuration action can only be performed via UI. | [optional] [readonly] 
**entity_pause_reason** | **str** | The user-provided reason for pausing this guaranteed order. Must be UTF-8 encoded with a maximum length of 100 bytes. Only applicable when entity_status is set to &#x60;ENTITY_STATUS_PAUSED&#x60;. | [optional] 
**entity_status** | **str** | Whether or not the guaranteed order is servable. Acceptable values are &#x60;ENTITY_STATUS_ACTIVE&#x60;, &#x60;ENTITY_STATUS_ARCHIVED&#x60;, and &#x60;ENTITY_STATUS_PAUSED&#x60;. Default value is &#x60;ENTITY_STATUS_ACTIVE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.guaranteed_order_status import GuaranteedOrderStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GuaranteedOrderStatus from a JSON string
guaranteed_order_status_instance = GuaranteedOrderStatus.from_json(json)
# print the JSON string representation of the object
print(GuaranteedOrderStatus.to_json())

# convert the object into a dict
guaranteed_order_status_dict = guaranteed_order_status_instance.to_dict()
# create an instance of GuaranteedOrderStatus from a dict
guaranteed_order_status_from_dict = GuaranteedOrderStatus.from_dict(guaranteed_order_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


