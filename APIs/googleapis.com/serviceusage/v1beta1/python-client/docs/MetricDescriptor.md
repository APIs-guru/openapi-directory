# MetricDescriptor

Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A detailed description of the metric, which can be used in documentation. | [optional] 
**display_name** | **str** | A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example \&quot;Request count\&quot;. This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. | [optional] 
**labels** | [**List[LabelDescriptor]**](LabelDescriptor.md) | The set of labels that can be used to describe a specific instance of this metric type. For example, the &#x60;appengine.googleapis.com/http/server/response_latencies&#x60; metric type has a label for the HTTP response code, &#x60;response_code&#x60;, so you can look at latencies for successful responses or just for responses that failed. | [optional] 
**launch_stage** | **str** | Optional. The launch stage of the metric definition. | [optional] 
**metadata** | [**MetricDescriptorMetadata**](MetricDescriptorMetadata.md) |  | [optional] 
**metric_kind** | **str** | Whether the metric records instantaneous values, changes to a value, etc. Some combinations of &#x60;metric_kind&#x60; and &#x60;value_type&#x60; might not be supported. | [optional] 
**monitored_resource_types** | **List[str]** | Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. | [optional] 
**name** | **str** | The resource name of the metric descriptor. | [optional] 
**type** | **str** | The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name &#x60;custom.googleapis.com&#x60; or &#x60;external.googleapis.com&#x60;. Metric types should use a natural hierarchical grouping. For example: \&quot;custom.googleapis.com/invoice/paid/amount\&quot; \&quot;external.googleapis.com/prometheus/up\&quot; \&quot;appengine.googleapis.com/http/server/response_latencies\&quot; | [optional] 
**unit** | **str** | The units in which the metric value is reported. It is only applicable if the &#x60;value_type&#x60; is &#x60;INT64&#x60;, &#x60;DOUBLE&#x60;, or &#x60;DISTRIBUTION&#x60;. The &#x60;unit&#x60; defines the representation of the stored metric values. Different systems might scale the values to be more easily displayed (so a value of &#x60;0.02kBy&#x60; _might_ be displayed as &#x60;20By&#x60;, and a value of &#x60;3523kBy&#x60; _might_ be displayed as &#x60;3.5MBy&#x60;). However, if the &#x60;unit&#x60; is &#x60;kBy&#x60;, then the value of the metric is always in thousands of bytes, no matter how it might be displayed. If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an &#x60;INT64 CUMULATIVE&#x60; metric whose &#x60;unit&#x60; is &#x60;s{CPU}&#x60; (or equivalently &#x60;1s{CPU}&#x60; or just &#x60;s&#x60;). If the job uses 12,005 CPU-seconds, then the value is written as &#x60;12005&#x60;. Alternatively, if you want a custom metric to record data in a more granular way, you can create a &#x60;DOUBLE CUMULATIVE&#x60; metric whose &#x60;unit&#x60; is &#x60;ks{CPU}&#x60;, and then write the value &#x60;12.005&#x60; (which is &#x60;12005/1000&#x60;), or use &#x60;Kis{CPU}&#x60; and write &#x60;11.723&#x60; (which is &#x60;12005/1024&#x60;). The supported units are a subset of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html) standard: **Basic units (UNIT)** * &#x60;bit&#x60; bit * &#x60;By&#x60; byte * &#x60;s&#x60; second * &#x60;min&#x60; minute * &#x60;h&#x60; hour * &#x60;d&#x60; day * &#x60;1&#x60; dimensionless **Prefixes (PREFIX)** * &#x60;k&#x60; kilo (10^3) * &#x60;M&#x60; mega (10^6) * &#x60;G&#x60; giga (10^9) * &#x60;T&#x60; tera (10^12) * &#x60;P&#x60; peta (10^15) * &#x60;E&#x60; exa (10^18) * &#x60;Z&#x60; zetta (10^21) * &#x60;Y&#x60; yotta (10^24) * &#x60;m&#x60; milli (10^-3) * &#x60;u&#x60; micro (10^-6) * &#x60;n&#x60; nano (10^-9) * &#x60;p&#x60; pico (10^-12) * &#x60;f&#x60; femto (10^-15) * &#x60;a&#x60; atto (10^-18) * &#x60;z&#x60; zepto (10^-21) * &#x60;y&#x60; yocto (10^-24) * &#x60;Ki&#x60; kibi (2^10) * &#x60;Mi&#x60; mebi (2^20) * &#x60;Gi&#x60; gibi (2^30) * &#x60;Ti&#x60; tebi (2^40) * &#x60;Pi&#x60; pebi (2^50) **Grammar** The grammar also includes these connectors: * &#x60;/&#x60; division or ratio (as an infix operator). For examples, &#x60;kBy/{email}&#x60; or &#x60;MiBy/10ms&#x60; (although you should almost never have &#x60;/s&#x60; in a metric &#x60;unit&#x60;; rates should always be computed at query time from the underlying cumulative or delta value). * &#x60;.&#x60; multiplication or composition (as an infix operator). For examples, &#x60;GBy.d&#x60; or &#x60;k{watt}.h&#x60;. The grammar for a unit is as follows: Expression &#x3D; Component { \&quot;.\&quot; Component } { \&quot;/\&quot; Component } ; Component &#x3D; ( [ PREFIX ] UNIT | \&quot;%\&quot; ) [ Annotation ] | Annotation | \&quot;1\&quot; ; Annotation &#x3D; \&quot;{\&quot; NAME \&quot;}\&quot; ; Notes: * &#x60;Annotation&#x60; is just a comment if it follows a &#x60;UNIT&#x60;. If the annotation is used alone, then the unit is equivalent to &#x60;1&#x60;. For examples, &#x60;{request}/s &#x3D;&#x3D; 1/s&#x60;, &#x60;By{transmitted}/s &#x3D;&#x3D; By/s&#x60;. * &#x60;NAME&#x60; is a sequence of non-blank printable ASCII characters not containing &#x60;{&#x60; or &#x60;}&#x60;. * &#x60;1&#x60; represents a unitary [dimensionless unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in &#x60;1/s&#x60;. It is typically used when none of the basic units are appropriate. For example, \&quot;new users per day\&quot; can be represented as &#x60;1/d&#x60; or &#x60;{new-users}/d&#x60; (and a metric value &#x60;5&#x60; would mean \&quot;5 new users). Alternatively, \&quot;thousands of page views per day\&quot; would be represented as &#x60;1000/d&#x60; or &#x60;k1/d&#x60; or &#x60;k{page_views}/d&#x60; (and a metric value of &#x60;5.3&#x60; would mean \&quot;5300 page views per day\&quot;). * &#x60;%&#x60; represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value &#x60;3&#x60; means \&quot;3 percent\&quot;). * &#x60;10^2.%&#x60; indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value &#x60;0.03&#x60; means \&quot;3 percent\&quot;). | [optional] 
**value_type** | **str** | Whether the measurement is an integer, a floating-point number, etc. Some combinations of &#x60;metric_kind&#x60; and &#x60;value_type&#x60; might not be supported. | [optional] 

## Example

```python
from openapi_client.models.metric_descriptor import MetricDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDescriptor from a JSON string
metric_descriptor_instance = MetricDescriptor.from_json(json)
# print the JSON string representation of the object
print(MetricDescriptor.to_json())

# convert the object into a dict
metric_descriptor_dict = metric_descriptor_instance.to_dict()
# create an instance of MetricDescriptor from a dict
metric_descriptor_from_dict = MetricDescriptor.from_dict(metric_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


