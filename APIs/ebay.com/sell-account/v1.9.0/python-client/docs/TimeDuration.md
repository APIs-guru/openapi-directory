# TimeDuration

A type used to specify a period of time using a specified time-measurement unit. Payment, return, and fulfillment business policies all use this type to specify time windows.<br/><br/>Whenever a container that uses this type is used in a request, both of these fields are required. Similarly, whenever a container that uses this type is returned in a response, both of these fields are always returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | These enum values represent the time measurement unit, such as &lt;code&gt;DAY&lt;/code&gt;. A span of time is defined when you apply the value specified in the &lt;b&gt;value&lt;/b&gt; field to the value specified for &lt;b&gt;unit&lt;/b&gt;. &lt;br/&gt;&lt;br/&gt;See &lt;b&gt;TimeDurationUnitEnum&lt;/b&gt; for a complete list of possible time-measurement units. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/ba:TimeDurationUnitEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **int** | An integer that represents an amount of time, as measured by the time-measurement unit specified in the &lt;b&gt;unit&lt;/b&gt; field. | [optional] 

## Example

```python
from openapi_client.models.time_duration import TimeDuration

# TODO update the JSON string below
json = "{}"
# create an instance of TimeDuration from a JSON string
time_duration_instance = TimeDuration.from_json(json)
# print the JSON string representation of the object
print(TimeDuration.to_json())

# convert the object into a dict
time_duration_dict = time_duration_instance.to_dict()
# create an instance of TimeDuration from a dict
time_duration_from_dict = TimeDuration.from_dict(time_duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


