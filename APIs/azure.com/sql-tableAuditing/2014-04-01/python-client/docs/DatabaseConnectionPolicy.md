# DatabaseConnectionPolicy

A database connection policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource kind. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**DatabaseConnectionPolicyProperties**](DatabaseConnectionPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_connection_policy import DatabaseConnectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseConnectionPolicy from a JSON string
database_connection_policy_instance = DatabaseConnectionPolicy.from_json(json)
# print the JSON string representation of the object
print(DatabaseConnectionPolicy.to_json())

# convert the object into a dict
database_connection_policy_dict = database_connection_policy_instance.to_dict()
# create an instance of DatabaseConnectionPolicy from a dict
database_connection_policy_from_dict = DatabaseConnectionPolicy.from_dict(database_connection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


