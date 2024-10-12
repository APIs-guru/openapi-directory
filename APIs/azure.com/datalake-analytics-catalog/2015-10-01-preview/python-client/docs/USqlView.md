# USqlView

A Data Lake Analytics catalog U-SQL view item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database. | [optional] 
**definition** | **str** | the defined query of the view. | [optional] 
**schema_name** | **str** | the name of the schema associated with this view and database. | [optional] 
**view_name** | **str** | the name of the view. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_view import USqlView

# TODO update the JSON string below
json = "{}"
# create an instance of USqlView from a JSON string
u_sql_view_instance = USqlView.from_json(json)
# print the JSON string representation of the object
print(USqlView.to_json())

# convert the object into a dict
u_sql_view_dict = u_sql_view_instance.to_dict()
# create an instance of USqlView from a dict
u_sql_view_from_dict = USqlView.from_dict(u_sql_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


