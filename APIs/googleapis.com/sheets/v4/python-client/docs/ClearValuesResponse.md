# ClearValuesResponse

The response when clearing a range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleared_range** | **str** | The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet&#39;s limits.) | [optional] 
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 

## Example

```python
from openapi_client.models.clear_values_response import ClearValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClearValuesResponse from a JSON string
clear_values_response_instance = ClearValuesResponse.from_json(json)
# print the JSON string representation of the object
print(ClearValuesResponse.to_json())

# convert the object into a dict
clear_values_response_dict = clear_values_response_instance.to_dict()
# create an instance of ClearValuesResponse from a dict
clear_values_response_from_dict = ClearValuesResponse.from_dict(clear_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


