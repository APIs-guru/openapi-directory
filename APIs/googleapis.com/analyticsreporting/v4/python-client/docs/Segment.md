# Segment

The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_segment** | [**DynamicSegment**](DynamicSegment.md) |  | [optional] 
**segment_id** | **str** | The segment ID of a built-in or custom segment, for example &#x60;gaid::-3&#x60;. | [optional] 

## Example

```python
from openapi_client.models.segment import Segment

# TODO update the JSON string below
json = "{}"
# create an instance of Segment from a JSON string
segment_instance = Segment.from_json(json)
# print the JSON string representation of the object
print(Segment.to_json())

# convert the object into a dict
segment_dict = segment_instance.to_dict()
# create an instance of Segment from a dict
segment_from_dict = Segment.from_dict(segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


