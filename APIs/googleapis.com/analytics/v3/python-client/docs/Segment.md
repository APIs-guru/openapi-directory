# Segment

JSON template for an Analytics segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Time the segment was created. | [optional] 
**definition** | **str** | Segment definition. | [optional] 
**id** | **str** | Segment ID. | [optional] 
**kind** | **str** | Resource type for Analytics segment. | [optional] [default to 'analytics#segment']
**name** | **str** | Segment name. | [optional] 
**segment_id** | **str** | Segment ID. Can be used with the &#39;segment&#39; parameter in Core Reporting API. | [optional] 
**self_link** | **str** | Link for this segment. | [optional] 
**type** | **str** | Type for a segment. Possible values are \&quot;BUILT_IN\&quot; or \&quot;CUSTOM\&quot;. | [optional] 
**updated** | **datetime** | Time the segment was last modified. | [optional] 

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


