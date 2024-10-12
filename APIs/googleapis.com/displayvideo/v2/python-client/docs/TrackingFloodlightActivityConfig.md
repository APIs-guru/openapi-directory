# TrackingFloodlightActivityConfig

Settings that control the behavior of a single Floodlight activity config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activity_id** | **str** | Required. The ID of the Floodlight activity. | [optional] 
**post_click_lookback_window_days** | **int** | Required. The number of days after an ad has been clicked in which a conversion may be counted. Must be between 0 and 90 inclusive. | [optional] 
**post_view_lookback_window_days** | **int** | Required. The number of days after an ad has been viewed in which a conversion may be counted. Must be between 0 and 90 inclusive. | [optional] 

## Example

```python
from openapi_client.models.tracking_floodlight_activity_config import TrackingFloodlightActivityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingFloodlightActivityConfig from a JSON string
tracking_floodlight_activity_config_instance = TrackingFloodlightActivityConfig.from_json(json)
# print the JSON string representation of the object
print(TrackingFloodlightActivityConfig.to_json())

# convert the object into a dict
tracking_floodlight_activity_config_dict = tracking_floodlight_activity_config_instance.to_dict()
# create an instance of TrackingFloodlightActivityConfig from a dict
tracking_floodlight_activity_config_from_dict = TrackingFloodlightActivityConfig.from_dict(tracking_floodlight_activity_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


