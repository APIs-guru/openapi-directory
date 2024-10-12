# CloudSQLConfig

Cloud SQL configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | Peering service used for peering with the Cloud SQL project. | [optional] 
**umbrella_network** | **str** | The name of the umbrella network in the Cloud SQL umbrella project. | [optional] 
**umbrella_project** | **str** | The project number of the Cloud SQL umbrella project. | [optional] 

## Example

```python
from openapi_client.models.cloud_sql_config import CloudSQLConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSQLConfig from a JSON string
cloud_sql_config_instance = CloudSQLConfig.from_json(json)
# print the JSON string representation of the object
print(CloudSQLConfig.to_json())

# convert the object into a dict
cloud_sql_config_dict = cloud_sql_config_instance.to_dict()
# create an instance of CloudSQLConfig from a dict
cloud_sql_config_from_dict = CloudSQLConfig.from_dict(cloud_sql_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


