# StreamingJobProperties

The properties that are associated with a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_level** | [**CompatibilityLevel**](CompatibilityLevel.md) |  | [optional] 
**created_date** | **datetime** | Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created. | [optional] [readonly] 
**data_locale** | **str** | The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v&#x3D;vs.110).aspx. Defaults to &#39;en-US&#39; if none specified. | [optional] 
**etag** | **str** | The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. | [optional] [readonly] 
**events_late_arrival_max_delay_in_seconds** | **int** | The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1. | [optional] 
**events_out_of_order_max_delay_in_seconds** | **int** | The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. | [optional] 
**events_out_of_order_policy** | [**EventsOutOfOrderPolicy**](EventsOutOfOrderPolicy.md) |  | [optional] 
**functions** | [**List[StreamingJobPropertiesFunctionsInner]**](StreamingJobPropertiesFunctionsInner.md) | A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation. | [optional] 
**inputs** | [**List[StreamingJobPropertiesInputsInner]**](StreamingJobPropertiesInputsInner.md) | A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input. | [optional] 
**job_id** | **str** | A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job. | [optional] [readonly] 
**job_state** | **str** | Describes the state of the streaming job. | [optional] [readonly] 
**last_output_event_time** | **datetime** | Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set. | [optional] [readonly] 
**output_error_policy** | [**OutputErrorPolicy**](OutputErrorPolicy.md) |  | [optional] 
**output_start_mode** | [**OutputStartMode**](OutputStartMode.md) |  | [optional] 
**output_start_time** | **datetime** | Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. | [optional] 
**outputs** | [**List[StreamingJobPropertiesOutputsInner]**](StreamingJobPropertiesOutputsInner.md) | A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output. | [optional] 
**provisioning_state** | **str** | Describes the provisioning status of the streaming job. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**transformation** | [**StreamingJobPropertiesTransformation**](StreamingJobPropertiesTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_job_properties import StreamingJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingJobProperties from a JSON string
streaming_job_properties_instance = StreamingJobProperties.from_json(json)
# print the JSON string representation of the object
print(StreamingJobProperties.to_json())

# convert the object into a dict
streaming_job_properties_dict = streaming_job_properties_instance.to_dict()
# create an instance of StreamingJobProperties from a dict
streaming_job_properties_from_dict = StreamingJobProperties.from_dict(streaming_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


