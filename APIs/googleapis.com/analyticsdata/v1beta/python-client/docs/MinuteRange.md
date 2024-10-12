# MinuteRange

A contiguous set of minutes: `startMinutesAgo`, `startMinutesAgo + 1`, ..., `endMinutesAgo`. Requests are allowed up to 2 minute ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_minutes_ago** | **int** | The inclusive end minute for the query as a number of minutes before now. Cannot be before &#x60;startMinutesAgo&#x60;. For example, &#x60;\&quot;endMinutesAgo\&quot;: 15&#x60; specifies the report should include event data from prior to 15 minutes ago. If unspecified, &#x60;endMinutesAgo&#x60; is defaulted to 0. Standard Analytics properties can request any minute in the last 30 minutes of event data (&#x60;endMinutesAgo &lt;&#x3D; 29&#x60;), and 360 Analytics properties can request any minute in the last 60 minutes of event data (&#x60;endMinutesAgo &lt;&#x3D; 59&#x60;). | [optional] 
**name** | **str** | Assigns a name to this minute range. The dimension &#x60;dateRange&#x60; is valued to this name in a report response. If set, cannot begin with &#x60;date_range_&#x60; or &#x60;RESERVED_&#x60;. If not set, minute ranges are named by their zero based index in the request: &#x60;date_range_0&#x60;, &#x60;date_range_1&#x60;, etc. | [optional] 
**start_minutes_ago** | **int** | The inclusive start minute for the query as a number of minutes before now. For example, &#x60;\&quot;startMinutesAgo\&quot;: 29&#x60; specifies the report should include event data from 29 minutes ago and after. Cannot be after &#x60;endMinutesAgo&#x60;. If unspecified, &#x60;startMinutesAgo&#x60; is defaulted to 29. Standard Analytics properties can request up to the last 30 minutes of event data (&#x60;startMinutesAgo &lt;&#x3D; 29&#x60;), and 360 Analytics properties can request up to the last 60 minutes of event data (&#x60;startMinutesAgo &lt;&#x3D; 59&#x60;). | [optional] 

## Example

```python
from openapi_client.models.minute_range import MinuteRange

# TODO update the JSON string below
json = "{}"
# create an instance of MinuteRange from a JSON string
minute_range_instance = MinuteRange.from_json(json)
# print the JSON string representation of the object
print(MinuteRange.to_json())

# convert the object into a dict
minute_range_dict = minute_range_instance.to_dict()
# create an instance of MinuteRange from a dict
minute_range_from_dict = MinuteRange.from_dict(minute_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


