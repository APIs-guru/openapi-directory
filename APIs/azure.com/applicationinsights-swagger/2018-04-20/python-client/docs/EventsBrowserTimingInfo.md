# EventsBrowserTimingInfo

The browser timing information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the page | [optional] 
**network_duration** | **int** | The network duration of the load | [optional] 
**performance_bucket** | **str** | The performance bucket of the load | [optional] 
**processing_duration** | **int** | The processing duration of the load | [optional] 
**receive_duration** | **int** | The receive duration of the load | [optional] 
**send_duration** | **int** | The send duration of the load | [optional] 
**total_duration** | **int** | The total duration of the load | [optional] 
**url** | **str** | The url of the page | [optional] 
**url_host** | **str** | The host of the URL | [optional] 
**url_path** | **str** | The path of the URL | [optional] 

## Example

```python
from openapi_client.models.events_browser_timing_info import EventsBrowserTimingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsBrowserTimingInfo from a JSON string
events_browser_timing_info_instance = EventsBrowserTimingInfo.from_json(json)
# print the JSON string representation of the object
print(EventsBrowserTimingInfo.to_json())

# convert the object into a dict
events_browser_timing_info_dict = events_browser_timing_info_instance.to_dict()
# create an instance of EventsBrowserTimingInfo from a dict
events_browser_timing_info_from_dict = EventsBrowserTimingInfo.from_dict(events_browser_timing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


