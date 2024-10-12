# SQLDataDirectory

SQLDataDirectory info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logical_name** | **str** | Logical name of the file | [optional] 
**path** | **str** | File path | [optional] 
**type** | **str** | Type of data directory mapping | [optional] 

## Example

```python
from openapi_client.models.sql_data_directory import SQLDataDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of SQLDataDirectory from a JSON string
sql_data_directory_instance = SQLDataDirectory.from_json(json)
# print the JSON string representation of the object
print(SQLDataDirectory.to_json())

# convert the object into a dict
sql_data_directory_dict = sql_data_directory_instance.to_dict()
# create an instance of SQLDataDirectory from a dict
sql_data_directory_from_dict = SQLDataDirectory.from_dict(sql_data_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


