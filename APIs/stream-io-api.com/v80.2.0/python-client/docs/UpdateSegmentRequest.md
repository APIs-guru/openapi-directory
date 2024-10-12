# UpdateSegmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment** | [**SegmentUpdateableFieldsRequest**](SegmentUpdateableFieldsRequest.md) |  | 

## Example

```python
from openapi_client.models.update_segment_request import UpdateSegmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSegmentRequest from a JSON string
update_segment_request_instance = UpdateSegmentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSegmentRequest.to_json())

# convert the object into a dict
update_segment_request_dict = update_segment_request_instance.to_dict()
# create an instance of UpdateSegmentRequest from a dict
update_segment_request_from_dict = UpdateSegmentRequest.from_dict(update_segment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


