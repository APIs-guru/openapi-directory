# CopyPasteRequest

Copies data from the source to the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GridRange**](GridRange.md) |  | [optional] 
**paste_orientation** | **str** | How that data should be oriented when pasting. | [optional] 
**paste_type** | **str** | What kind of data to paste. | [optional] 
**source** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.copy_paste_request import CopyPasteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopyPasteRequest from a JSON string
copy_paste_request_instance = CopyPasteRequest.from_json(json)
# print the JSON string representation of the object
print(CopyPasteRequest.to_json())

# convert the object into a dict
copy_paste_request_dict = copy_paste_request_instance.to_dict()
# create an instance of CopyPasteRequest from a dict
copy_paste_request_from_dict = CopyPasteRequest.from_dict(copy_paste_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


