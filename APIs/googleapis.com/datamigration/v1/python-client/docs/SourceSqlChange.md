# SourceSqlChange

Options to configure rule type SourceSqlChange. The rule is used to alter the sql code for database entities. The rule filter field can refer to one entity. The rule scope can be: StoredProcedure, Function, Trigger, View

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_code** | **str** | Required. Sql code for source (stored procedure, function, trigger or view) | [optional] 

## Example

```python
from openapi_client.models.source_sql_change import SourceSqlChange

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSqlChange from a JSON string
source_sql_change_instance = SourceSqlChange.from_json(json)
# print the JSON string representation of the object
print(SourceSqlChange.to_json())

# convert the object into a dict
source_sql_change_dict = source_sql_change_instance.to_dict()
# create an instance of SourceSqlChange from a dict
source_sql_change_from_dict = SourceSqlChange.from_dict(source_sql_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


