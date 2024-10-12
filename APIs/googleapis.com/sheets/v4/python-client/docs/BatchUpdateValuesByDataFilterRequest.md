# BatchUpdateValuesByDataFilterRequest

The request for updating more than one range of values in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DataFilterValueRange]**](DataFilterValueRange.md) | The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges. | [optional] 
**include_values_in_response** | **bool** | Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The &#x60;updatedData&#x60; field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). | [optional] 
**response_date_time_render_option** | **str** | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. | [optional] 
**response_value_render_option** | **str** | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. | [optional] 
**value_input_option** | **str** | How the input data should be interpreted. | [optional] 

## Example

```python
from openapi_client.models.batch_update_values_by_data_filter_request import BatchUpdateValuesByDataFilterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateValuesByDataFilterRequest from a JSON string
batch_update_values_by_data_filter_request_instance = BatchUpdateValuesByDataFilterRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateValuesByDataFilterRequest.to_json())

# convert the object into a dict
batch_update_values_by_data_filter_request_dict = batch_update_values_by_data_filter_request_instance.to_dict()
# create an instance of BatchUpdateValuesByDataFilterRequest from a dict
batch_update_values_by_data_filter_request_from_dict = BatchUpdateValuesByDataFilterRequest.from_dict(batch_update_values_by_data_filter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


