# PostgresqlProfile

PostgreSQL database profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Required. Database for the PostgreSQL connection. | [optional] 
**hostname** | **str** | Required. Hostname for the PostgreSQL connection. | [optional] 
**password** | **str** | Required. Password for the PostgreSQL connection. | [optional] 
**port** | **int** | Port for the PostgreSQL connection, default value is 5432. | [optional] 
**username** | **str** | Required. Username for the PostgreSQL connection. | [optional] 

## Example

```python
from openapi_client.models.postgresql_profile import PostgresqlProfile

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlProfile from a JSON string
postgresql_profile_instance = PostgresqlProfile.from_json(json)
# print the JSON string representation of the object
print(PostgresqlProfile.to_json())

# convert the object into a dict
postgresql_profile_dict = postgresql_profile_instance.to_dict()
# create an instance of PostgresqlProfile from a dict
postgresql_profile_from_dict = PostgresqlProfile.from_dict(postgresql_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


