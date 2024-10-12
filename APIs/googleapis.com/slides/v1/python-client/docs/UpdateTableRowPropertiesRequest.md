# UpdateTableRowPropertiesRequest

Updates the properties of a Table row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;tableRowProperties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the minimum row height, set &#x60;fields&#x60; to &#x60;\&quot;min_row_height\&quot;&#x60;. If &#39;\&quot;min_row_height\&quot;&#39; is included in the field mask but the property is left unset, the minimum row height will default to 0. | [optional] 
**object_id** | **str** | The object ID of the table. | [optional] 
**row_indices** | **List[int]** | The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated. | [optional] 
**table_row_properties** | [**TableRowProperties**](TableRowProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_table_row_properties_request import UpdateTableRowPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableRowPropertiesRequest from a JSON string
update_table_row_properties_request_instance = UpdateTableRowPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableRowPropertiesRequest.to_json())

# convert the object into a dict
update_table_row_properties_request_dict = update_table_row_properties_request_instance.to_dict()
# create an instance of UpdateTableRowPropertiesRequest from a dict
update_table_row_properties_request_from_dict = UpdateTableRowPropertiesRequest.from_dict(update_table_row_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


