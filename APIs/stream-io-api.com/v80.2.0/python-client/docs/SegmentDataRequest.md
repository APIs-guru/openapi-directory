# SegmentDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**filter** | **Dict[str, object]** |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.segment_data_request import SegmentDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentDataRequest from a JSON string
segment_data_request_instance = SegmentDataRequest.from_json(json)
# print the JSON string representation of the object
print(SegmentDataRequest.to_json())

# convert the object into a dict
segment_data_request_dict = segment_data_request_instance.to_dict()
# create an instance of SegmentDataRequest from a dict
segment_data_request_from_dict = SegmentDataRequest.from_dict(segment_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


