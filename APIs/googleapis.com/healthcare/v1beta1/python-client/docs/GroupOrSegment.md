# GroupOrSegment

Construct representing a logical group or a segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**SchemaGroup**](SchemaGroup.md) |  | [optional] 
**segment** | [**SchemaSegment**](SchemaSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_or_segment import GroupOrSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GroupOrSegment from a JSON string
group_or_segment_instance = GroupOrSegment.from_json(json)
# print the JSON string representation of the object
print(GroupOrSegment.to_json())

# convert the object into a dict
group_or_segment_dict = group_or_segment_instance.to_dict()
# create an instance of GroupOrSegment from a dict
group_or_segment_from_dict = GroupOrSegment.from_dict(group_or_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


