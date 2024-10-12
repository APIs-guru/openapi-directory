# AudienceSegmentGroup

Audience Segment Group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience_segments** | [**List[AudienceSegment]**](AudienceSegment.md) | Audience segments assigned to this group. The number of segments must be between 2 and 100. | [optional] 
**id** | **str** | ID of this audience segment group. This is a read-only, auto-generated field. | [optional] 
**name** | **str** | Name of this audience segment group. This is a required field and must be less than 65 characters long. | [optional] 

## Example

```python
from openapi_client.models.audience_segment_group import AudienceSegmentGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceSegmentGroup from a JSON string
audience_segment_group_instance = AudienceSegmentGroup.from_json(json)
# print the JSON string representation of the object
print(AudienceSegmentGroup.to_json())

# convert the object into a dict
audience_segment_group_dict = audience_segment_group_instance.to_dict()
# create an instance of AudienceSegmentGroup from a dict
audience_segment_group_from_dict = AudienceSegmentGroup.from_dict(audience_segment_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


