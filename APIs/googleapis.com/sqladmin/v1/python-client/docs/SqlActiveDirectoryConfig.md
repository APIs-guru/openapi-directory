# SqlActiveDirectoryConfig

Active Directory configuration, relevant only for Cloud SQL for SQL Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The name of the domain (e.g., mydomain.com). | [optional] 
**kind** | **str** | This is always sql#activeDirectoryConfig. | [optional] 

## Example

```python
from openapi_client.models.sql_active_directory_config import SqlActiveDirectoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SqlActiveDirectoryConfig from a JSON string
sql_active_directory_config_instance = SqlActiveDirectoryConfig.from_json(json)
# print the JSON string representation of the object
print(SqlActiveDirectoryConfig.to_json())

# convert the object into a dict
sql_active_directory_config_dict = sql_active_directory_config_instance.to_dict()
# create an instance of SqlActiveDirectoryConfig from a dict
sql_active_directory_config_from_dict = SqlActiveDirectoryConfig.from_dict(sql_active_directory_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


