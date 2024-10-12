# MysqlProfile

MySQL database profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** | Required. Hostname for the MySQL connection. | [optional] 
**password** | **str** | Required. Input only. Password for the MySQL connection. | [optional] 
**port** | **int** | Port for the MySQL connection, default value is 3306. | [optional] 
**ssl_config** | [**MysqlSslConfig**](MysqlSslConfig.md) |  | [optional] 
**username** | **str** | Required. Username for the MySQL connection. | [optional] 

## Example

```python
from openapi_client.models.mysql_profile import MysqlProfile

# TODO update the JSON string below
json = "{}"
# create an instance of MysqlProfile from a JSON string
mysql_profile_instance = MysqlProfile.from_json(json)
# print the JSON string representation of the object
print(MysqlProfile.to_json())

# convert the object into a dict
mysql_profile_dict = mysql_profile_instance.to_dict()
# create an instance of MysqlProfile from a dict
mysql_profile_from_dict = MysqlProfile.from_dict(mysql_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


