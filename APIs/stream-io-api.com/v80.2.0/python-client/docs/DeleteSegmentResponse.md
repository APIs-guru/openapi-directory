# DeleteSegmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.delete_segment_response import DeleteSegmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteSegmentResponse from a JSON string
delete_segment_response_instance = DeleteSegmentResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteSegmentResponse.to_json())

# convert the object into a dict
delete_segment_response_dict = delete_segment_response_instance.to_dict()
# create an instance of DeleteSegmentResponse from a dict
delete_segment_response_from_dict = DeleteSegmentResponse.from_dict(delete_segment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


