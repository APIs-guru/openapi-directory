# SQLDataDirectoryMapping

Encapsulates information regarding data directory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_type** | **str** | Type of data directory mapping | [optional] 
**source_logical_name** | **str** | Restore source logical name path | [optional] 
**source_path** | **str** | Restore source path | [optional] 
**target_path** | **str** | Target path | [optional] 

## Example

```python
from openapi_client.models.sql_data_directory_mapping import SQLDataDirectoryMapping

# TODO update the JSON string below
json = "{}"
# create an instance of SQLDataDirectoryMapping from a JSON string
sql_data_directory_mapping_instance = SQLDataDirectoryMapping.from_json(json)
# print the JSON string representation of the object
print(SQLDataDirectoryMapping.to_json())

# convert the object into a dict
sql_data_directory_mapping_dict = sql_data_directory_mapping_instance.to_dict()
# create an instance of SQLDataDirectoryMapping from a dict
sql_data_directory_mapping_from_dict = SQLDataDirectoryMapping.from_dict(sql_data_directory_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


