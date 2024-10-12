# Span

A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous. There might be gaps or overlaps between spans in a trace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Attributes**](Attributes.md) |  | [optional] 
**child_span_count** | **int** | Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans. | [optional] 
**display_name** | [**TruncatableString**](TruncatableString.md) |  | [optional] 
**end_time** | **str** | Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running. | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 
**name** | **str** | Required. The resource name of the span in the following format: * &#x60;projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]&#x60; &#x60;[TRACE_ID]&#x60; is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. &#x60;[SPAN_ID]&#x60; is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. . | [optional] 
**parent_span_id** | **str** | The &#x60;[SPAN_ID]&#x60; of this span&#39;s parent span. If this is a root span, then this field must be empty. | [optional] 
**same_process_as_parent_span** | **bool** | Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful information. | [optional] 
**span_id** | **str** | Required. The &#x60;[SPAN_ID]&#x60; portion of the span&#39;s resource name. | [optional] 
**span_kind** | **str** | Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using &#x60;CLIENT&#x60; (caller) and &#x60;SERVER&#x60; (callee) to identify an RPC call. | [optional] 
**stack_trace** | [**StackTrace**](StackTrace.md) |  | [optional] 
**start_time** | **str** | Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server&#39;s application handler starts running. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**time_events** | [**TimeEvents**](TimeEvents.md) |  | [optional] 

## Example

```python
from openapi_client.models.span import Span

# TODO update the JSON string below
json = "{}"
# create an instance of Span from a JSON string
span_instance = Span.from_json(json)
# print the JSON string representation of the object
print(Span.to_json())

# convert the object into a dict
span_dict = span_instance.to_dict()
# create an instance of Span from a dict
span_from_dict = Span.from_dict(span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


