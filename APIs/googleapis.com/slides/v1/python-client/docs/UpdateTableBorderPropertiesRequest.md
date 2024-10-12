# UpdateTableBorderPropertiesRequest

Updates the properties of the table borders in a Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border_position** | **str** | The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range. | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;tableBorderProperties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update the table border solid fill color, set &#x60;fields&#x60; to &#x60;\&quot;tableBorderFill.solidFill.color\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**object_id** | **str** | The object ID of the table. | [optional] 
**table_border_properties** | [**TableBorderProperties**](TableBorderProperties.md) |  | [optional] 
**table_range** | [**TableRange**](TableRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_table_border_properties_request import UpdateTableBorderPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTableBorderPropertiesRequest from a JSON string
update_table_border_properties_request_instance = UpdateTableBorderPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTableBorderPropertiesRequest.to_json())

# convert the object into a dict
update_table_border_properties_request_dict = update_table_border_properties_request_instance.to_dict()
# create an instance of UpdateTableBorderPropertiesRequest from a dict
update_table_border_properties_request_from_dict = UpdateTableBorderPropertiesRequest.from_dict(update_table_border_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


