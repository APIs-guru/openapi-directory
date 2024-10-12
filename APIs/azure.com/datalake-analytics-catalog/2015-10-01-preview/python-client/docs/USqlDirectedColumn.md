# USqlDirectedColumn

A Data Lake Analytics catalog U-SQL directed column item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descending** | **bool** | the switch indicating if the index is descending or not. | [optional] 
**name** | **str** | the name of the index in the table. | [optional] 

## Example

```python
from openapi_client.models.u_sql_directed_column import USqlDirectedColumn

# TODO update the JSON string below
json = "{}"
# create an instance of USqlDirectedColumn from a JSON string
u_sql_directed_column_instance = USqlDirectedColumn.from_json(json)
# print the JSON string representation of the object
print(USqlDirectedColumn.to_json())

# convert the object into a dict
u_sql_directed_column_dict = u_sql_directed_column_instance.to_dict()
# create an instance of USqlDirectedColumn from a dict
u_sql_directed_column_from_dict = USqlDirectedColumn.from_dict(u_sql_directed_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


