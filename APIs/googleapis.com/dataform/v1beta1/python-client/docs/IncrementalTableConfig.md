# IncrementalTableConfig

Contains settings for relations of type `INCREMENTAL_TABLE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incremental_post_operations** | **List[str]** | SQL statements to be executed after inserting new rows into the relation. | [optional] 
**incremental_pre_operations** | **List[str]** | SQL statements to be executed before inserting new rows into the relation. | [optional] 
**incremental_select_query** | **str** | The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed. | [optional] 
**refresh_disabled** | **bool** | Whether this table should be protected from being refreshed. | [optional] 
**unique_key_parts** | **List[str]** | A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by &#x60;unique_key_parts&#x60;), only the newly selected rows (as defined by &#x60;incremental_select_query&#x60;) will be included in the relation. | [optional] 
**update_partition_filter** | **str** | A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see &#x60;unique_key_parts&#x60; for more information). | [optional] 

## Example

```python
from openapi_client.models.incremental_table_config import IncrementalTableConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IncrementalTableConfig from a JSON string
incremental_table_config_instance = IncrementalTableConfig.from_json(json)
# print the JSON string representation of the object
print(IncrementalTableConfig.to_json())

# convert the object into a dict
incremental_table_config_dict = incremental_table_config_instance.to_dict()
# create an instance of IncrementalTableConfig from a dict
incremental_table_config_from_dict = IncrementalTableConfig.from_dict(incremental_table_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


