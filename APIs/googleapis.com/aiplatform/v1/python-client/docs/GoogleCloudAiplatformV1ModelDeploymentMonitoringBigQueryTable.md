# GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable

ModelDeploymentMonitoringBigQueryTable specifies the BigQuery table name as well as some information of the logs stored in this table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_table_path** | **str** | The created BigQuery table to store logs. Customer could do their own query &amp; analysis. Format: &#x60;bq://.model_deployment_monitoring_._&#x60; | [optional] 
**log_source** | **str** | The source of log. | [optional] 
**log_type** | **str** | The type of log. | [optional] 
**request_response_logging_schema_version** | **str** | Output only. The schema version of the request/response logging BigQuery table. Default to v1 if unset. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_deployment_monitoring_big_query_table import GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable from a JSON string
google_cloud_aiplatform_v1_model_deployment_monitoring_big_query_table_instance = GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_deployment_monitoring_big_query_table_dict = google_cloud_aiplatform_v1_model_deployment_monitoring_big_query_table_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable from a dict
google_cloud_aiplatform_v1_model_deployment_monitoring_big_query_table_from_dict = GoogleCloudAiplatformV1ModelDeploymentMonitoringBigQueryTable.from_dict(google_cloud_aiplatform_v1_model_deployment_monitoring_big_query_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


