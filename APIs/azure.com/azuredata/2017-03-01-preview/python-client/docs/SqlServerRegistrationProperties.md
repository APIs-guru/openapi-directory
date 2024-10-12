# SqlServerRegistrationProperties

The SQL server Registration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_bag** | **str** | Optional Properties as JSON string | [optional] 
**resource_group** | **str** | Resource Group Name | [optional] 
**subscription_id** | **str** | Subscription Id | [optional] 

## Example

```python
from openapi_client.models.sql_server_registration_properties import SqlServerRegistrationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerRegistrationProperties from a JSON string
sql_server_registration_properties_instance = SqlServerRegistrationProperties.from_json(json)
# print the JSON string representation of the object
print(SqlServerRegistrationProperties.to_json())

# convert the object into a dict
sql_server_registration_properties_dict = sql_server_registration_properties_instance.to_dict()
# create an instance of SqlServerRegistrationProperties from a dict
sql_server_registration_properties_from_dict = SqlServerRegistrationProperties.from_dict(sql_server_registration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


