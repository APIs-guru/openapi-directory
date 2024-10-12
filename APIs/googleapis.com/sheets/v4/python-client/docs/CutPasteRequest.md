# CutPasteRequest

Moves data from the source to the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 
**paste_type** | **str** | What kind of data to paste. All the source data will be cut, regardless of what is pasted. | [optional] 
**source** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.cut_paste_request import CutPasteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CutPasteRequest from a JSON string
cut_paste_request_instance = CutPasteRequest.from_json(json)
# print the JSON string representation of the object
print(CutPasteRequest.to_json())

# convert the object into a dict
cut_paste_request_dict = cut_paste_request_instance.to_dict()
# create an instance of CutPasteRequest from a dict
cut_paste_request_from_dict = CutPasteRequest.from_dict(cut_paste_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


