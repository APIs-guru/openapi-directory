# UpdateTableRowStyleRequest

Updates the TableRowStyle of rows in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;tableRowStyle&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the minimum row height, set &#x60;fields&#x60; to &#x60;\&quot;min_row_height\&quot;&#x60;. | [optional] 
**row_indices** | **List[int]** | The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated. | [optional] 
**table_row_style** | [**TableRowStyle**](TableRowStyle.md) |  | [optional] 
**table_start_location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_table_row_style_request import UpdateTableRowStyleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableRowStyleRequest from a JSON string
update_table_row_style_request_instance = UpdateTableRowStyleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableRowStyleRequest.to_json())

# convert the object into a dict
update_table_row_style_request_dict = update_table_row_style_request_instance.to_dict()
# create an instance of UpdateTableRowStyleRequest from a dict
update_table_row_style_request_from_dict = UpdateTableRowStyleRequest.from_dict(update_table_row_style_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


