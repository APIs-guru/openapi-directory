# InsertSectionBreakRequest

Inserts a section break at the given location. A newline character will be inserted before the section break.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_of_segment_location** | [**EndOfSegmentLocation**](EndOfSegmentLocation.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**section_type** | **str** | The type of section to insert. | [optional] 

## Example

```python
from openapi_client.models.insert_section_break_request import InsertSectionBreakRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertSectionBreakRequest from a JSON string
insert_section_break_request_instance = InsertSectionBreakRequest.from_json(json)
# print the JSON string representation of the object
print(InsertSectionBreakRequest.to_json())

# convert the object into a dict
insert_section_break_request_dict = insert_section_break_request_instance.to_dict()
# create an instance of InsertSectionBreakRequest from a dict
insert_section_break_request_from_dict = InsertSectionBreakRequest.from_dict(insert_section_break_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


