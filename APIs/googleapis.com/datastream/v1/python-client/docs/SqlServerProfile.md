# SqlServerProfile

SQLServer database profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Required. Database for the SQLServer connection. | [optional] 
**hostname** | **str** | Required. Hostname for the SQLServer connection. | [optional] 
**password** | **str** | Required. Password for the SQLServer connection. | [optional] 
**port** | **int** | Port for the SQLServer connection, default value is 1433. | [optional] 
**username** | **str** | Required. Username for the SQLServer connection. | [optional] 

## Example

```python
from openapi_client.models.sql_server_profile import SqlServerProfile

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerProfile from a JSON string
sql_server_profile_instance = SqlServerProfile.from_json(json)
# print the JSON string representation of the object
print(SqlServerProfile.to_json())

# convert the object into a dict
sql_server_profile_dict = sql_server_profile_instance.to_dict()
# create an instance of SqlServerProfile from a dict
sql_server_profile_from_dict = SqlServerProfile.from_dict(sql_server_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


