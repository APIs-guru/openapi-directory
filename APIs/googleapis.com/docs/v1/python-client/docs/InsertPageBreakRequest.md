# InsertPageBreakRequest

Inserts a page break followed by a newline at the specified location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_of_segment_location** | [**EndOfSegmentLocation**](EndOfSegmentLocation.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.insert_page_break_request import InsertPageBreakRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InsertPageBreakRequest from a JSON string
insert_page_break_request_instance = InsertPageBreakRequest.from_json(json)
# print the JSON string representation of the object
print(InsertPageBreakRequest.to_json())

# convert the object into a dict
insert_page_break_request_dict = insert_page_break_request_instance.to_dict()
# create an instance of InsertPageBreakRequest from a dict
insert_page_break_request_from_dict = InsertPageBreakRequest.from_dict(insert_page_break_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


