# BatchGetValuesByDataFilterResponse

The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spreadsheet_id** | **str** | The ID of the spreadsheet the data was retrieved from. | [optional] 
**value_ranges** | [**List[MatchedValueRange]**](MatchedValueRange.md) | The requested values with the list of data filters that matched them. | [optional] 

## Example

```python
from openapi_client.models.batch_get_values_by_data_filter_response import BatchGetValuesByDataFilterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetValuesByDataFilterResponse from a JSON string
batch_get_values_by_data_filter_response_instance = BatchGetValuesByDataFilterResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetValuesByDataFilterResponse.to_json())

# convert the object into a dict
batch_get_values_by_data_filter_response_dict = batch_get_values_by_data_filter_response_instance.to_dict()
# create an instance of BatchGetValuesByDataFilterResponse from a dict
batch_get_values_by_data_filter_response_from_dict = BatchGetValuesByDataFilterResponse.from_dict(batch_get_values_by_data_filter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


