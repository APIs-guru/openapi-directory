# CreateSegmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**segment** | [**Segment**](Segment.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_segment_response import CreateSegmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSegmentResponse from a JSON string
create_segment_response_instance = CreateSegmentResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSegmentResponse.to_json())

# convert the object into a dict
create_segment_response_dict = create_segment_response_instance.to_dict()
# create an instance of CreateSegmentResponse from a dict
create_segment_response_from_dict = CreateSegmentResponse.from_dict(create_segment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


