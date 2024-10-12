# GoogleAdsSearchads360V0CommonAdScheduleInfo

Represents an AdSchedule criterion. AdSchedule is specified as the day of the week and a time interval within which ads will be shown. No more than six AdSchedules can be added for the same day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 
**end_hour** | **int** | Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 
**end_minute** | **str** | Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 
**start_hour** | **int** | Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 
**start_minute** | **str** | Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_ad_schedule_info import GoogleAdsSearchads360V0CommonAdScheduleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonAdScheduleInfo from a JSON string
google_ads_searchads360_v0_common_ad_schedule_info_instance = GoogleAdsSearchads360V0CommonAdScheduleInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonAdScheduleInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_ad_schedule_info_dict = google_ads_searchads360_v0_common_ad_schedule_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonAdScheduleInfo from a dict
google_ads_searchads360_v0_common_ad_schedule_info_from_dict = GoogleAdsSearchads360V0CommonAdScheduleInfo.from_dict(google_ads_searchads360_v0_common_ad_schedule_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


