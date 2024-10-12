# BatchClearValuesByDataFilterResponse

The response when clearing a range of values selected with DataFilters in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleared_ranges** | **List[str]** | The ranges that were cleared, in [A1 notation](/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet&#39;s limits. | [optional] 
**spreadsheet_id** | **str** | The spreadsheet the updates were applied to. | [optional] 

## Example

```python
from openapi_client.models.batch_clear_values_by_data_filter_response import BatchClearValuesByDataFilterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchClearValuesByDataFilterResponse from a JSON string
batch_clear_values_by_data_filter_response_instance = BatchClearValuesByDataFilterResponse.from_json(json)
# print the JSON string representation of the object
print(BatchClearValuesByDataFilterResponse.to_json())

# convert the object into a dict
batch_clear_values_by_data_filter_response_dict = batch_clear_values_by_data_filter_response_instance.to_dict()
# create an instance of BatchClearValuesByDataFilterResponse from a dict
batch_clear_values_by_data_filter_response_from_dict = BatchClearValuesByDataFilterResponse.from_dict(batch_clear_values_by_data_filter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


