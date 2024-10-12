# Table


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_headers** | [**Headers**](Headers.md) |  | [optional] 
**name** | **str** | Name of the table. Required for subtables, ignored for the main table. | [optional] 
**row_headers** | [**Headers**](Headers.md) |  | [optional] 
**rows** | [**List[Row]**](Row.md) | The list of rows that constitute the table. Must have the same length as &#x60;rowHeaders&#x60;. Required. | [optional] 

## Example

```python
from openapi_client.models.table import Table

# TODO update the JSON string below
json = "{}"
# create an instance of Table from a JSON string
table_instance = Table.from_json(json)
# print the JSON string representation of the object
print(Table.to_json())

# convert the object into a dict
table_dict = table_instance.to_dict()
# create an instance of Table from a dict
table_from_dict = Table.from_dict(table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


