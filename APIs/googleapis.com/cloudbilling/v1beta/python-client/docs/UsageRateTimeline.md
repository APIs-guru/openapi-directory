# UsageRateTimeline

A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit for the usage rate in each timeline entry. If you provide an incorrect unit for an instance, the correct unit is provided in the error message. The supported units are a subset of [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard: * **Time units (TIME-UNIT)** * &#x60;s&#x60; second * &#x60;min&#x60; minute * &#x60;h&#x60; hour * &#x60;d&#x60; day * &#x60;wk&#x60; week * &#x60;mo&#x60; month * &#x60;yr&#x60; year * &#x60;ms&#x60; millisecond * &#x60;us&#x60; microsecond * &#x60;ns&#x60; nanosecond * **Basic storage units (BASIC-STORAGE-UNIT)** * &#x60;bit&#x60; bit * &#x60;By&#x60; byte * **Count units (COUNT-UNIT)** * &#x60;count&#x60; count * **Prefixes (PREFIX)** * &#x60;k&#x60; kilo (10^3) * &#x60;M&#x60; mega (10^6) * &#x60;G&#x60; giga (10^9) * &#x60;T&#x60; tera (10^12) * &#x60;P&#x60; peta (10^15) * &#x60;Ki&#x60; kibi (2^10) * &#x60;Mi&#x60; mebi (2^20) * &#x60;Gi&#x60; gibi (2^30) * &#x60;Ti&#x60; tebi (2^40) * &#x60;Pi&#x60; pebi (2^50) **Grammar** The grammar also includes these connectors: * &#x60;/&#x60; division or ratio (as an infix operator). For example: &#x60;kBy/{email}&#x60; or &#x60;MiBy/10ms&#x60;. * &#x60;.&#x60; multiplication or composition (as an infix operator). For example: &#x60;GBy.d&#x60; or &#x60;k{watt}.h&#x60;. The grammar for a unit is as follows: &#x60;&#x60;&#x60; Expression &#x3D; Component { \&quot;.\&quot; Component } { \&quot;/\&quot; Component } ; Component &#x3D; ( [ PREFIX ] UNIT | \&quot;%\&quot; ) [ Annotation ] | Annotation | \&quot;1\&quot; ; UNIT &#x3D; TIME-UNIT | STORAGE-UNIT | DATA-UNIT | COUNT-UNIT Annotation &#x3D; \&quot;{\&quot; NAME \&quot;}\&quot; ; &#x60;&#x60;&#x60; Examples: * Request per second: &#x60;1/s&#x60; or &#x60;{requests}/s&#x60; * GibiBytes: &#x60;GiBy&#x60; * GibiBytes * seconds: &#x60;GiBy.s&#x60; | [optional] 
**usage_rate_timeline_entries** | [**List[UsageRateTimelineEntry]**](UsageRateTimelineEntry.md) | The timeline entries. Each entry has a start time and usage rate. The start time specifies the effective time of the usage rate. The entries must be sorted by start time in an increasing order. | [optional] 

## Example

```python
from openapi_client.models.usage_rate_timeline import UsageRateTimeline

# TODO update the JSON string below
json = "{}"
# create an instance of UsageRateTimeline from a JSON string
usage_rate_timeline_instance = UsageRateTimeline.from_json(json)
# print the JSON string representation of the object
print(UsageRateTimeline.to_json())

# convert the object into a dict
usage_rate_timeline_dict = usage_rate_timeline_instance.to_dict()
# create an instance of UsageRateTimeline from a dict
usage_rate_timeline_from_dict = UsageRateTimeline.from_dict(usage_rate_timeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


