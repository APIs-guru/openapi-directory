# SegmentUpdateableFieldsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**filter** | **Dict[str, object]** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.segment_updateable_fields_request import SegmentUpdateableFieldsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentUpdateableFieldsRequest from a JSON string
segment_updateable_fields_request_instance = SegmentUpdateableFieldsRequest.from_json(json)
# print the JSON string representation of the object
print(SegmentUpdateableFieldsRequest.to_json())

# convert the object into a dict
segment_updateable_fields_request_dict = segment_updateable_fields_request_instance.to_dict()
# create an instance of SegmentUpdateableFieldsRequest from a dict
segment_updateable_fields_request_from_dict = SegmentUpdateableFieldsRequest.from_dict(segment_updateable_fields_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


