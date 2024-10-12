# PinTableHeaderRowsRequest

Updates the number of pinned table header rows in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pinned_header_rows_count** | **int** | The number of table rows to pin, where 0 implies that all rows are unpinned. | [optional] 
**table_start_location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.pin_table_header_rows_request import PinTableHeaderRowsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PinTableHeaderRowsRequest from a JSON string
pin_table_header_rows_request_instance = PinTableHeaderRowsRequest.from_json(json)
# print the JSON string representation of the object
print(PinTableHeaderRowsRequest.to_json())

# convert the object into a dict
pin_table_header_rows_request_dict = pin_table_header_rows_request_instance.to_dict()
# create an instance of PinTableHeaderRowsRequest from a dict
pin_table_header_rows_request_from_dict = PinTableHeaderRowsRequest.from_dict(pin_table_header_rows_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


