# TableListTablesInnerView

Information about a logical view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privacy_policy** | [**PrivacyPolicy**](PrivacyPolicy.md) |  | [optional] 
**use_legacy_sql** | **bool** | True if view is defined in legacy SQL dialect, false if in GoogleSQL. | [optional] 

## Example

```python
from openapi_client.models.table_list_tables_inner_view import TableListTablesInnerView

# TODO update the JSON string below
json = "{}"
# create an instance of TableListTablesInnerView from a JSON string
table_list_tables_inner_view_instance = TableListTablesInnerView.from_json(json)
# print the JSON string representation of the object
print(TableListTablesInnerView.to_json())

# convert the object into a dict
table_list_tables_inner_view_dict = table_list_tables_inner_view_instance.to_dict()
# create an instance of TableListTablesInnerView from a dict
table_list_tables_inner_view_from_dict = TableListTablesInnerView.from_dict(table_list_tables_inner_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


