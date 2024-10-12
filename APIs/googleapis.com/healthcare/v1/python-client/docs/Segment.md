# Segment

A segment in a structured format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **Dict[str, str]** | A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\\d+)(\\[\\d+\\])?(.\\d+)?(.\\d+)? Examples of (key, value) pairs: * (0.1, \&quot;hemoglobin\&quot;) denotes that the first component of Field 0 has the value \&quot;hemoglobin\&quot;. * (1.1.2, \&quot;CBC\&quot;) denotes that the second sub-component of the first component of Field 1 has the value \&quot;CBC\&quot;. * (1[0].1, \&quot;HbA1c\&quot;) denotes that the first component of the first Instance of Field 1, which is repeated, has the value \&quot;HbA1c\&quot;. | [optional] 
**segment_id** | **str** | A string that indicates the type of segment. For example, EVN or PID. | [optional] 
**set_id** | **str** | Set ID for segments that can be in a set. This can be empty if it&#39;s missing or isn&#39;t applicable. | [optional] 

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


