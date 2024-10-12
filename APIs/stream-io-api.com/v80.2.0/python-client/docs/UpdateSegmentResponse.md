# UpdateSegmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**segment** | [**Segment**](Segment.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_segment_response import UpdateSegmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSegmentResponse from a JSON string
update_segment_response_instance = UpdateSegmentResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateSegmentResponse.to_json())

# convert the object into a dict
update_segment_response_dict = update_segment_response_instance.to_dict()
# create an instance of UpdateSegmentResponse from a dict
update_segment_response_from_dict = UpdateSegmentResponse.from_dict(update_segment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


