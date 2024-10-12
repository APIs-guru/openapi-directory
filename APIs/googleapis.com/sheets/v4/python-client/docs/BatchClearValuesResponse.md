# BatchClearValuesResponse

The response when clearing a range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleared_ranges** | **List[str]** | The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet&#39;s limits. | [optional] 
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 

## Example

```python
from openapi_client.models.batch_clear_values_response import BatchClearValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchClearValuesResponse from a JSON string
batch_clear_values_response_instance = BatchClearValuesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchClearValuesResponse.to_json())

# convert the object into a dict
batch_clear_values_response_dict = batch_clear_values_response_instance.to_dict()
# create an instance of BatchClearValuesResponse from a dict
batch_clear_values_response_from_dict = BatchClearValuesResponse.from_dict(batch_clear_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


