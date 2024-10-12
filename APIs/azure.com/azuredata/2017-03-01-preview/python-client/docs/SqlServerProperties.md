# SqlServerProperties

The SQL server properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cores** | **int** | Cores of the Sql Server. | [optional] 
**edition** | **str** | Sql Server Edition. | [optional] 
**property_bag** | **str** | Sql Server Json Property Bag. | [optional] 
**registration_id** | **str** | ID for Parent Sql Server Registration. | [optional] 
**version** | **str** | Version of the Sql Server. | [optional] 

## Example

```python
from openapi_client.models.sql_server_properties import SqlServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerProperties from a JSON string
sql_server_properties_instance = SqlServerProperties.from_json(json)
# print the JSON string representation of the object
print(SqlServerProperties.to_json())

# convert the object into a dict
sql_server_properties_dict = sql_server_properties_instance.to_dict()
# create an instance of SqlServerProperties from a dict
sql_server_properties_from_dict = SqlServerProperties.from_dict(sql_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


