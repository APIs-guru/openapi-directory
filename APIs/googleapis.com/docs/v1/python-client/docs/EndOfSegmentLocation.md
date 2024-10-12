# EndOfSegmentLocation

Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment_id** | **str** | The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document&#39;s body. | [optional] 

## Example

```python
from openapi_client.models.end_of_segment_location import EndOfSegmentLocation

# TODO update the JSON string below
json = "{}"
# create an instance of EndOfSegmentLocation from a JSON string
end_of_segment_location_instance = EndOfSegmentLocation.from_json(json)
# print the JSON string representation of the object
print(EndOfSegmentLocation.to_json())

# convert the object into a dict
end_of_segment_location_dict = end_of_segment_location_instance.to_dict()
# create an instance of EndOfSegmentLocation from a dict
end_of_segment_location_from_dict = EndOfSegmentLocation.from_dict(end_of_segment_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


