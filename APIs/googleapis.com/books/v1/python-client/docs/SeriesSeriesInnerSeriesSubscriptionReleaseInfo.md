# SeriesSeriesInnerSeriesSubscriptionReleaseInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** |  | [optional] 
**current_release_info** | [**SeriesSeriesInnerSeriesSubscriptionReleaseInfoCurrentReleaseInfo**](SeriesSeriesInnerSeriesSubscriptionReleaseInfoCurrentReleaseInfo.md) |  | [optional] 
**next_release_info** | [**SeriesSeriesInnerSeriesSubscriptionReleaseInfoCurrentReleaseInfo**](SeriesSeriesInnerSeriesSubscriptionReleaseInfoCurrentReleaseInfo.md) |  | [optional] 
**series_subscription_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.series_series_inner_series_subscription_release_info import SeriesSeriesInnerSeriesSubscriptionReleaseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesSeriesInnerSeriesSubscriptionReleaseInfo from a JSON string
series_series_inner_series_subscription_release_info_instance = SeriesSeriesInnerSeriesSubscriptionReleaseInfo.from_json(json)
# print the JSON string representation of the object
print(SeriesSeriesInnerSeriesSubscriptionReleaseInfo.to_json())

# convert the object into a dict
series_series_inner_series_subscription_release_info_dict = series_series_inner_series_subscription_release_info_instance.to_dict()
# create an instance of SeriesSeriesInnerSeriesSubscriptionReleaseInfo from a dict
series_series_inner_series_subscription_release_info_from_dict = SeriesSeriesInnerSeriesSubscriptionReleaseInfo.from_dict(series_series_inner_series_subscription_release_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


