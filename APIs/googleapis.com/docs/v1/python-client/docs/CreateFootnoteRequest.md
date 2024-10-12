# CreateFootnoteRequest

Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_of_segment_location** | [**EndOfSegmentLocation**](EndOfSegmentLocation.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_footnote_request import CreateFootnoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFootnoteRequest from a JSON string
create_footnote_request_instance = CreateFootnoteRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFootnoteRequest.to_json())

# convert the object into a dict
create_footnote_request_dict = create_footnote_request_instance.to_dict()
# create an instance of CreateFootnoteRequest from a dict
create_footnote_request_from_dict = CreateFootnoteRequest.from_dict(create_footnote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


