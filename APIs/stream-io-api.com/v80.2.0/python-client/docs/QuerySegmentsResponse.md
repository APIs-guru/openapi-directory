# QuerySegmentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**segments** | [**List[Segment]**](Segment.md) |  | 

## Example

```python
from openapi_client.models.query_segments_response import QuerySegmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QuerySegmentsResponse from a JSON string
query_segments_response_instance = QuerySegmentsResponse.from_json(json)
# print the JSON string representation of the object
print(QuerySegmentsResponse.to_json())

# convert the object into a dict
query_segments_response_dict = query_segments_response_instance.to_dict()
# create an instance of QuerySegmentsResponse from a dict
query_segments_response_from_dict = QuerySegmentsResponse.from_dict(query_segments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


