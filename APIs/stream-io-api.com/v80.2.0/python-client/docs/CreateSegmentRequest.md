# CreateSegmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment** | [**SegmentDataRequest**](SegmentDataRequest.md) |  | 

## Example

```python
from openapi_client.models.create_segment_request import CreateSegmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSegmentRequest from a JSON string
create_segment_request_instance = CreateSegmentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSegmentRequest.to_json())

# convert the object into a dict
create_segment_request_dict = create_segment_request_instance.to_dict()
# create an instance of CreateSegmentRequest from a dict
create_segment_request_from_dict = CreateSegmentRequest.from_dict(create_segment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


