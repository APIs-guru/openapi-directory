# SchemaSegment

An HL7v2 Segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_occurs** | **int** | The maximum number of times this segment can be present in this group. 0 or -1 means unbounded. | [optional] 
**min_occurs** | **int** | The minimum number of times this segment can be present in this group. | [optional] 
**type** | **str** | The Segment type. For example, \&quot;PID\&quot;. | [optional] 

## Example

```python
from openapi_client.models.schema_segment import SchemaSegment

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaSegment from a JSON string
schema_segment_instance = SchemaSegment.from_json(json)
# print the JSON string representation of the object
print(SchemaSegment.to_json())

# convert the object into a dict
schema_segment_dict = schema_segment_instance.to_dict()
# create an instance of SchemaSegment from a dict
schema_segment_from_dict = SchemaSegment.from_dict(schema_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


