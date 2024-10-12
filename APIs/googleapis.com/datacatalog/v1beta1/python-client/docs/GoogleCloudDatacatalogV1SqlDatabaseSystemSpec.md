# GoogleCloudDatacatalogV1SqlDatabaseSystemSpec

Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_version** | **str** | Version of the database engine. | [optional] 
**instance_host** | **str** | Host of the SQL database enum InstanceHost { UNDEFINED &#x3D; 0; SELF_HOSTED &#x3D; 1; CLOUD_SQL &#x3D; 2; AMAZON_RDS &#x3D; 3; AZURE_SQL &#x3D; 4; } Host of the enclousing database instance. | [optional] 
**sql_engine** | **str** | SQL Database Engine. enum SqlEngine { UNDEFINED &#x3D; 0; MY_SQL &#x3D; 1; POSTGRE_SQL &#x3D; 2; SQL_SERVER &#x3D; 3; } Engine of the enclosing database instance. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_sql_database_system_spec import GoogleCloudDatacatalogV1SqlDatabaseSystemSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SqlDatabaseSystemSpec from a JSON string
google_cloud_datacatalog_v1_sql_database_system_spec_instance = GoogleCloudDatacatalogV1SqlDatabaseSystemSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SqlDatabaseSystemSpec.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_sql_database_system_spec_dict = google_cloud_datacatalog_v1_sql_database_system_spec_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SqlDatabaseSystemSpec from a dict
google_cloud_datacatalog_v1_sql_database_system_spec_from_dict = GoogleCloudDatacatalogV1SqlDatabaseSystemSpec.from_dict(google_cloud_datacatalog_v1_sql_database_system_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


