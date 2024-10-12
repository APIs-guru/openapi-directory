# HolidaysHoliday


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | The CLDR territory code of the country in which the holiday is available. For example, \&quot;US\&quot;, \&quot;DE\&quot;, \&quot;GB\&quot;. A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present. | [optional] 
**var_date** | **str** | Date of the holiday, in ISO 8601 format. For example, \&quot;2016-12-25\&quot; for Christmas 2016. Always present. | [optional] 
**delivery_guarantee_date** | **str** | Date on which the order has to arrive at the customer&#39;s, in ISO 8601 format. For example, \&quot;2016-12-24\&quot; for 24th December 2016. Always present. | [optional] 
**delivery_guarantee_hour** | **str** | Hour of the day in the delivery location&#39;s timezone on the guaranteed delivery date by which the order has to arrive at the customer&#39;s. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present. | [optional] 
**id** | **str** | Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present. | [optional] 
**type** | **str** | The holiday type. Always present. Acceptable values are: - \&quot;&#x60;Christmas&#x60;\&quot; - \&quot;&#x60;Easter&#x60;\&quot; - \&quot;&#x60;Father&#39;s Day&#x60;\&quot; - \&quot;&#x60;Halloween&#x60;\&quot; - \&quot;&#x60;Independence Day (USA)&#x60;\&quot; - \&quot;&#x60;Mother&#39;s Day&#x60;\&quot; - \&quot;&#x60;Thanksgiving&#x60;\&quot; - \&quot;&#x60;Valentine&#39;s Day&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.holidays_holiday import HolidaysHoliday

# TODO update the JSON string below
json = "{}"
# create an instance of HolidaysHoliday from a JSON string
holidays_holiday_instance = HolidaysHoliday.from_json(json)
# print the JSON string representation of the object
print(HolidaysHoliday.to_json())

# convert the object into a dict
holidays_holiday_dict = holidays_holiday_instance.to_dict()
# create an instance of HolidaysHoliday from a dict
holidays_holiday_from_dict = HolidaysHoliday.from_dict(holidays_holiday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


