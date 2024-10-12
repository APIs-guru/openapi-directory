# TableBorderProperties

The border styling properties of the TableBorderCell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dash_style** | **str** | The dash style of the border. | [optional] 
**table_border_fill** | [**TableBorderFill**](TableBorderFill.md) |  | [optional] 
**weight** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_border_properties import TableBorderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableBorderProperties from a JSON string
table_border_properties_instance = TableBorderProperties.from_json(json)
# print the JSON string representation of the object
print(TableBorderProperties.to_json())

# convert the object into a dict
table_border_properties_dict = table_border_properties_instance.to_dict()
# create an instance of TableBorderProperties from a dict
table_border_properties_from_dict = TableBorderProperties.from_dict(table_border_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


