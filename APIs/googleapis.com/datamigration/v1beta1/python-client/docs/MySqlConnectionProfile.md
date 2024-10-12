# MySqlConnectionProfile

Specifies connection parameters required specifically for MySQL databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_sql_id** | **str** | If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source. | [optional] 
**host** | **str** | Required. The IP or hostname of the source MySQL database. | [optional] 
**password** | **str** | Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service. | [optional] 
**password_set** | **bool** | Output only. Indicates If this connection profile password is stored. | [optional] [readonly] 
**port** | **int** | Required. The network port of the source MySQL database. | [optional] 
**ssl** | [**SslConfig**](SslConfig.md) |  | [optional] 
**username** | **str** | Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service. | [optional] 

## Example

```python
from openapi_client.models.my_sql_connection_profile import MySqlConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of MySqlConnectionProfile from a JSON string
my_sql_connection_profile_instance = MySqlConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(MySqlConnectionProfile.to_json())

# convert the object into a dict
my_sql_connection_profile_dict = my_sql_connection_profile_instance.to_dict()
# create an instance of MySqlConnectionProfile from a dict
my_sql_connection_profile_from_dict = MySqlConnectionProfile.from_dict(my_sql_connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


