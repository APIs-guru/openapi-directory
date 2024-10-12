# BatchWriteSpansRequest

The request message for the `BatchWriteSpans` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spans** | [**List[Span]**](Span.md) | Required. A list of new spans. The span names must not match existing spans, otherwise the results are undefined. | [optional] 

## Example

```python
from openapi_client.models.batch_write_spans_request import BatchWriteSpansRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchWriteSpansRequest from a JSON string
batch_write_spans_request_instance = BatchWriteSpansRequest.from_json(json)
# print the JSON string representation of the object
print(BatchWriteSpansRequest.to_json())

# convert the object into a dict
batch_write_spans_request_dict = batch_write_spans_request_instance.to_dict()
# create an instance of BatchWriteSpansRequest from a dict
batch_write_spans_request_from_dict = BatchWriteSpansRequest.from_dict(batch_write_spans_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


