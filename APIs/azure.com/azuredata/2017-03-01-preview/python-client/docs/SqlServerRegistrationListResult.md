# SqlServerRegistrationListResult

Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SqlServerRegistration]**](SqlServerRegistration.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_server_registration_list_result import SqlServerRegistrationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerRegistrationListResult from a JSON string
sql_server_registration_list_result_instance = SqlServerRegistrationListResult.from_json(json)
# print the JSON string representation of the object
print(SqlServerRegistrationListResult.to_json())

# convert the object into a dict
sql_server_registration_list_result_dict = sql_server_registration_list_result_instance.to_dict()
# create an instance of SqlServerRegistrationListResult from a dict
sql_server_registration_list_result_from_dict = SqlServerRegistrationListResult.from_dict(sql_server_registration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


