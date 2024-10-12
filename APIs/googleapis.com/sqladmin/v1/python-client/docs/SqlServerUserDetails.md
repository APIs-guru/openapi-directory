# SqlServerUserDetails

Represents a Sql Server user on the Cloud SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | If the user has been disabled | [optional] 
**server_roles** | **List[str]** | The server roles for this user | [optional] 

## Example

```python
from openapi_client.models.sql_server_user_details import SqlServerUserDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerUserDetails from a JSON string
sql_server_user_details_instance = SqlServerUserDetails.from_json(json)
# print the JSON string representation of the object
print(SqlServerUserDetails.to_json())

# convert the object into a dict
sql_server_user_details_dict = sql_server_user_details_instance.to_dict()
# create an instance of SqlServerUserDetails from a dict
sql_server_user_details_from_dict = SqlServerUserDetails.from_dict(sql_server_user_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


