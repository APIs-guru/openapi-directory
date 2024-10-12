# SqlServerRegistrationUpdate

An update to a SQL Server Registration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.sql_server_registration_update import SqlServerRegistrationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerRegistrationUpdate from a JSON string
sql_server_registration_update_instance = SqlServerRegistrationUpdate.from_json(json)
# print the JSON string representation of the object
print(SqlServerRegistrationUpdate.to_json())

# convert the object into a dict
sql_server_registration_update_dict = sql_server_registration_update_instance.to_dict()
# create an instance of SqlServerRegistrationUpdate from a dict
sql_server_registration_update_from_dict = SqlServerRegistrationUpdate.from_dict(sql_server_registration_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


