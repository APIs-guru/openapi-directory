# AudienceSegment

Audience Segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation** | **int** | Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive. | [optional] 
**id** | **str** | ID of this audience segment. This is a read-only, auto-generated field. | [optional] 
**name** | **str** | Name of this audience segment. This is a required field and must be less than 65 characters long. | [optional] 

## Example

```python
from openapi_client.models.audience_segment import AudienceSegment

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceSegment from a JSON string
audience_segment_instance = AudienceSegment.from_json(json)
# print the JSON string representation of the object
print(AudienceSegment.to_json())

# convert the object into a dict
audience_segment_dict = audience_segment_instance.to_dict()
# create an instance of AudienceSegment from a dict
audience_segment_from_dict = AudienceSegment.from_dict(audience_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


