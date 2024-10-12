# DatafeedFetchSchedule

The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_month** | **int** | The day of the month the feed file should be fetched (1-31). | [optional] 
**fetch_url** | **str** | The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols. | [optional] 
**hour** | **int** | The hour of the day the feed file should be fetched (0-23). | [optional] 
**minute_of_hour** | **int** | The minute of the hour the feed file should be fetched (0-59). Read-only. | [optional] 
**password** | **str** | An optional password for fetch_url. | [optional] 
**paused** | **bool** | Whether the scheduled fetch is paused or not. | [optional] 
**time_zone** | **str** | Time zone used for schedule. UTC by default. For example, \&quot;America/Los_Angeles\&quot;. | [optional] 
**username** | **str** | An optional user name for fetch_url. | [optional] 
**weekday** | **str** | The day of the week the feed file should be fetched. Acceptable values are: - \&quot;&#x60;monday&#x60;\&quot; - \&quot;&#x60;tuesday&#x60;\&quot; - \&quot;&#x60;wednesday&#x60;\&quot; - \&quot;&#x60;thursday&#x60;\&quot; - \&quot;&#x60;friday&#x60;\&quot; - \&quot;&#x60;saturday&#x60;\&quot; - \&quot;&#x60;sunday&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.datafeed_fetch_schedule import DatafeedFetchSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedFetchSchedule from a JSON string
datafeed_fetch_schedule_instance = DatafeedFetchSchedule.from_json(json)
# print the JSON string representation of the object
print(DatafeedFetchSchedule.to_json())

# convert the object into a dict
datafeed_fetch_schedule_dict = datafeed_fetch_schedule_instance.to_dict()
# create an instance of DatafeedFetchSchedule from a dict
datafeed_fetch_schedule_from_dict = DatafeedFetchSchedule.from_dict(datafeed_fetch_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


