# Rate

This complex type defines a \"rate\" as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | The maximum number of requests that can be made to this resource during a set time period. The length of time to which the limit is applied is defined by the associated &lt;b&gt;timeWindow&lt;/b&gt; value.  &lt;br&gt;&lt;br&gt;This value is often referred to as the \&quot;call quota\&quot; for the resource. | [optional] 
**remaining** | **int** | The remaining number of requests that can be made to this resource before the associated time window resets. | [optional] 
**reset** | **str** | The data and time the time window and accumulated calls for this resource reset.  &lt;br&gt;&lt;br&gt;When the &lt;b&gt;reset&lt;/b&gt; time is reached, the &lt;b&gt;remaining&lt;/b&gt; value is reset to the value of &lt;b&gt;limit&lt;/b&gt;, and this &lt;b&gt;reset&lt;/b&gt; value is reset to the current time plus the number of seconds defined by the &lt;b&gt;timeWindow&lt;/b&gt; value. &lt;br&gt;&lt;br&gt;The time stamp is formatted as an &lt;a href&#x3D;\&quot;http://www.iso.org/iso/home/standards/iso8601.htm \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 8601&lt;/a&gt; string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2018-08-04T07:09:00.000Z&lt;/code&gt; | [optional] 
**time_window** | **int** | A period of time, expressed in seconds. The call quota for a resource is applied to the period of time defined by the value of this field. | [optional] 

## Example

```python
from openapi_client.models.rate import Rate

# TODO update the JSON string below
json = "{}"
# create an instance of Rate from a JSON string
rate_instance = Rate.from_json(json)
# print the JSON string representation of the object
print(Rate.to_json())

# convert the object into a dict
rate_dict = rate_instance.to_dict()
# create an instance of Rate from a dict
rate_from_dict = Rate.from_dict(rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


