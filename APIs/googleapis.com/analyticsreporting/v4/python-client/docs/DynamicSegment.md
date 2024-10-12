# DynamicSegment

Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the dynamic segment. | [optional] 
**session_segment** | [**SegmentDefinition**](SegmentDefinition.md) |  | [optional] 
**user_segment** | [**SegmentDefinition**](SegmentDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.dynamic_segment import DynamicSegment

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicSegment from a JSON string
dynamic_segment_instance = DynamicSegment.from_json(json)
# print the JSON string representation of the object
print(DynamicSegment.to_json())

# convert the object into a dict
dynamic_segment_dict = dynamic_segment_instance.to_dict()
# create an instance of DynamicSegment from a dict
dynamic_segment_from_dict = DynamicSegment.from_dict(dynamic_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


