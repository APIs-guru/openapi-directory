# SqlServerRegistration

A SQL server registration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlServerRegistrationProperties**](SqlServerRegistrationProperties.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_server_registration import SqlServerRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerRegistration from a JSON string
sql_server_registration_instance = SqlServerRegistration.from_json(json)
# print the JSON string representation of the object
print(SqlServerRegistration.to_json())

# convert the object into a dict
sql_server_registration_dict = sql_server_registration_instance.to_dict()
# create an instance of SqlServerRegistration from a dict
sql_server_registration_from_dict = SqlServerRegistration.from_dict(sql_server_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


