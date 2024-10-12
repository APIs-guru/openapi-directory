# PasteDataRequest

Inserts data into the spreadsheet starting at the specified coordinate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinate** | [**GridCoordinate**](GridCoordinate.md) |  | [optional] 
**data** | **str** | The data to insert. | [optional] 
**delimiter** | **str** | The delimiter in the data. | [optional] 
**html** | **bool** | True if the data is HTML. | [optional] 
**type** | **str** | How the data should be pasted. | [optional] 

## Example

```python
from openapi_client.models.paste_data_request import PasteDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PasteDataRequest from a JSON string
paste_data_request_instance = PasteDataRequest.from_json(json)
# print the JSON string representation of the object
print(PasteDataRequest.to_json())

# convert the object into a dict
paste_data_request_dict = paste_data_request_instance.to_dict()
# create an instance of PasteDataRequest from a dict
paste_data_request_from_dict = PasteDataRequest.from_dict(paste_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


