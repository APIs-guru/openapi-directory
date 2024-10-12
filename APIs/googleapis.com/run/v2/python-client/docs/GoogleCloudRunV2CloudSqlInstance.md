# GoogleCloudRunV2CloudSqlInstance

Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **List[str]** | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_cloud_sql_instance import GoogleCloudRunV2CloudSqlInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2CloudSqlInstance from a JSON string
google_cloud_run_v2_cloud_sql_instance_instance = GoogleCloudRunV2CloudSqlInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2CloudSqlInstance.to_json())

# convert the object into a dict
google_cloud_run_v2_cloud_sql_instance_dict = google_cloud_run_v2_cloud_sql_instance_instance.to_dict()
# create an instance of GoogleCloudRunV2CloudSqlInstance from a dict
google_cloud_run_v2_cloud_sql_instance_from_dict = GoogleCloudRunV2CloudSqlInstance.from_dict(google_cloud_run_v2_cloud_sql_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


