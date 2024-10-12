# UpdateTableColumnPropertiesRequest

Updates the properties of a Table column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_indices** | **List[int]** | The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated. | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;tableColumnProperties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the column width, set &#x60;fields&#x60; to &#x60;\&quot;column_width\&quot;&#x60;. If &#39;\&quot;column_width\&quot;&#39; is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points). | [optional] 
**object_id** | **str** | The object ID of the table. | [optional] 
**table_column_properties** | [**TableColumnProperties**](TableColumnProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_table_column_properties_request import UpdateTableColumnPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableColumnPropertiesRequest from a JSON string
update_table_column_properties_request_instance = UpdateTableColumnPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableColumnPropertiesRequest.to_json())

# convert the object into a dict
update_table_column_properties_request_dict = update_table_column_properties_request_instance.to_dict()
# create an instance of UpdateTableColumnPropertiesRequest from a dict
update_table_column_properties_request_from_dict = UpdateTableColumnPropertiesRequest.from_dict(update_table_column_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


