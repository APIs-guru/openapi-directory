# DatabaseConfig

The configuration of Cloud SQL instance that is used by the Apache Airflow software.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. | [optional] 
**zone** | **str** | Optional. The Compute Engine zone where the Airflow database is created. If zone is provided, it must be in the region selected for the environment. If zone is not provided, a zone is automatically selected. The zone can only be set during environment creation. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.*. | [optional] 

## Example

```python
from openapi_client.models.database_config import DatabaseConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseConfig from a JSON string
database_config_instance = DatabaseConfig.from_json(json)
# print the JSON string representation of the object
print(DatabaseConfig.to_json())

# convert the object into a dict
database_config_dict = database_config_instance.to_dict()
# create an instance of DatabaseConfig from a dict
database_config_from_dict = DatabaseConfig.from_dict(database_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


