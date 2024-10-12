# SeriesSeriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banner_image_url** | **str** |  | [optional] 
**eligible_for_subscription** | **bool** |  | [optional] 
**image_url** | **str** |  | [optional] 
**is_complete** | **bool** |  | [optional] 
**series_format_type** | **str** |  | [optional] 
**series_id** | **str** |  | [optional] 
**series_subscription_release_info** | [**SeriesSeriesInnerSeriesSubscriptionReleaseInfo**](SeriesSeriesInnerSeriesSubscriptionReleaseInfo.md) |  | [optional] 
**series_type** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.series_series_inner import SeriesSeriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesSeriesInner from a JSON string
series_series_inner_instance = SeriesSeriesInner.from_json(json)
# print the JSON string representation of the object
print(SeriesSeriesInner.to_json())

# convert the object into a dict
series_series_inner_dict = series_series_inner_instance.to_dict()
# create an instance of SeriesSeriesInner from a dict
series_series_inner_from_dict = SeriesSeriesInner.from_dict(series_series_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


