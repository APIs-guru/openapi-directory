# SpanContext

The context of a span. This is attached to an Exemplar in Distribution values during aggregation.It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**span_name** | **str** | The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. | [optional] 

## Example

```python
from openapi_client.models.span_context import SpanContext

# TODO update the JSON string below
json = "{}"
# create an instance of SpanContext from a JSON string
span_context_instance = SpanContext.from_json(json)
# print the JSON string representation of the object
print(SpanContext.to_json())

# convert the object into a dict
span_context_dict = span_context_instance.to_dict()
# create an instance of SpanContext from a dict
span_context_from_dict = SpanContext.from_dict(span_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


