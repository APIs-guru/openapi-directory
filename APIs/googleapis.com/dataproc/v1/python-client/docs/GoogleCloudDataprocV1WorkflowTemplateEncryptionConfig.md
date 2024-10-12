# GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig

Encryption settings for encrypting workflow template job arguments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key** | **str** | Optional. The Cloud KMS key name to use for encrypting workflow template job arguments.When this this key is provided, the following workflow template job arguments (https://cloud.google.com/dataproc/docs/concepts/workflows/use-workflows#adding_jobs_to_a_template), if present, are CMEK encrypted (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/customer-managed-encryption#use_cmek_with_workflow_template_data): FlinkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/FlinkJob) HadoopJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/HadoopJob) SparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkJob) SparkRJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkRJob) PySparkJob args (https://cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob) SparkSqlJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/SparkSqlJob) scriptVariables and queryList.queries HiveJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/HiveJob) scriptVariables and queryList.queries PigJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PigJob) scriptVariables and queryList.queries PrestoJob (https://cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob) scriptVariables and queryList.queries | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataproc_v1_workflow_template_encryption_config import GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig from a JSON string
google_cloud_dataproc_v1_workflow_template_encryption_config_instance = GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig.to_json())

# convert the object into a dict
google_cloud_dataproc_v1_workflow_template_encryption_config_dict = google_cloud_dataproc_v1_workflow_template_encryption_config_instance.to_dict()
# create an instance of GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig from a dict
google_cloud_dataproc_v1_workflow_template_encryption_config_from_dict = GoogleCloudDataprocV1WorkflowTemplateEncryptionConfig.from_dict(google_cloud_dataproc_v1_workflow_template_encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


