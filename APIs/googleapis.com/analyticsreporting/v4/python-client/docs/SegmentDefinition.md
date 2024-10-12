# SegmentDefinition

SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment_filters** | [**List[SegmentFilter]**](SegmentFilter.md) | A segment is defined by a set of segment filters which are combined together with a logical &#x60;AND&#x60; operation. | [optional] 

## Example

```python
from openapi_client.models.segment_definition import SegmentDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentDefinition from a JSON string
segment_definition_instance = SegmentDefinition.from_json(json)
# print the JSON string representation of the object
print(SegmentDefinition.to_json())

# convert the object into a dict
segment_definition_dict = segment_definition_instance.to_dict()
# create an instance of SegmentDefinition from a dict
segment_definition_from_dict = SegmentDefinition.from_dict(segment_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


