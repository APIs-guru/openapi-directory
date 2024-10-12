# BatchClearValuesByDataFilterRequest

The request for clearing more than one range selected by a DataFilter in a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | The DataFilters used to determine which ranges to clear. | [optional] 

## Example

```python
from openapi_client.models.batch_clear_values_by_data_filter_request import BatchClearValuesByDataFilterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchClearValuesByDataFilterRequest from a JSON string
batch_clear_values_by_data_filter_request_instance = BatchClearValuesByDataFilterRequest.from_json(json)
# print the JSON string representation of the object
print(BatchClearValuesByDataFilterRequest.to_json())

# convert the object into a dict
batch_clear_values_by_data_filter_request_dict = batch_clear_values_by_data_filter_request_instance.to_dict()
# create an instance of BatchClearValuesByDataFilterRequest from a dict
batch_clear_values_by_data_filter_request_from_dict = BatchClearValuesByDataFilterRequest.from_dict(batch_clear_values_by_data_filter_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


