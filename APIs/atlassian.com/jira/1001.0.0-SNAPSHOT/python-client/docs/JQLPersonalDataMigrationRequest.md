# JQLPersonalDataMigrationRequest

The JQL queries to be converted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_strings** | **List[str]** | A list of queries with user identifiers. Maximum of 100 queries. | [optional] 

## Example

```python
from openapi_client.models.jql_personal_data_migration_request import JQLPersonalDataMigrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JQLPersonalDataMigrationRequest from a JSON string
jql_personal_data_migration_request_instance = JQLPersonalDataMigrationRequest.from_json(json)
# print the JSON string representation of the object
print(JQLPersonalDataMigrationRequest.to_json())

# convert the object into a dict
jql_personal_data_migration_request_dict = jql_personal_data_migration_request_instance.to_dict()
# create an instance of JQLPersonalDataMigrationRequest from a dict
jql_personal_data_migration_request_from_dict = JQLPersonalDataMigrationRequest.from_dict(jql_personal_data_migration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


