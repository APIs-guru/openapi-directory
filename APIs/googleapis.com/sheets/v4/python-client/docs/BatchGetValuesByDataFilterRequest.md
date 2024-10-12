# BatchGetValuesByDataFilterRequest

The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response. | [optional] 
**date_time_render_option** | **str** | How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. | [optional] 
**major_dimension** | **str** | The major dimension that results should use. For example, if the spreadsheet data is: &#x60;A1&#x3D;1,B1&#x3D;2,A2&#x3D;3,B2&#x3D;4&#x60;, then a request that selects that range and sets &#x60;majorDimension&#x3D;ROWS&#x60; returns &#x60;[[1,2],[3,4]]&#x60;, whereas a request that sets &#x60;majorDimension&#x3D;COLUMNS&#x60; returns &#x60;[[1,3],[2,4]]&#x60;. | [optional] 
**value_render_option** | **str** | How values should be represented in the output. The default render option is FORMATTED_VALUE. | [optional] 

## Example

```python
from openapi_client.models.batch_get_values_by_data_filter_request import BatchGetValuesByDataFilterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetValuesByDataFilterRequest from a JSON string
batch_get_values_by_data_filter_request_instance = BatchGetValuesByDataFilterRequest.from_json(json)
# print the JSON string representation of the object
print(BatchGetValuesByDataFilterRequest.to_json())

# convert the object into a dict
batch_get_values_by_data_filter_request_dict = batch_get_values_by_data_filter_request_instance.to_dict()
# create an instance of BatchGetValuesByDataFilterRequest from a dict
batch_get_values_by_data_filter_request_from_dict = BatchGetValuesByDataFilterRequest.from_dict(batch_get_values_by_data_filter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


