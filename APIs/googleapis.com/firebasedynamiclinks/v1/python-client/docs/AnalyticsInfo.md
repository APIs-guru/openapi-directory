# AnalyticsInfo

Tracking parameters supported by Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_play_analytics** | [**GooglePlayAnalytics**](GooglePlayAnalytics.md) |  | [optional] 
**itunes_connect_analytics** | [**ITunesConnectAnalytics**](ITunesConnectAnalytics.md) |  | [optional] 

## Example

```python
from openapi_client.models.analytics_info import AnalyticsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsInfo from a JSON string
analytics_info_instance = AnalyticsInfo.from_json(json)
# print the JSON string representation of the object
print(AnalyticsInfo.to_json())

# convert the object into a dict
analytics_info_dict = analytics_info_instance.to_dict()
# create an instance of AnalyticsInfo from a dict
analytics_info_from_dict = AnalyticsInfo.from_dict(analytics_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


