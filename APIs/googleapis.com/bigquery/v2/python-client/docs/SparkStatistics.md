# SparkStatistics

Statistics for a BigSpark query. Populated as part of JobStatistics2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | **Dict[str, str]** | Output only. Endpoints returned from Dataproc. Key list: - history_server_endpoint: A link to Spark job UI. | [optional] [readonly] 
**gcs_staging_bucket** | **str** | Output only. The Google Cloud Storage bucket that is used as the default filesystem by the Spark application. This fields is only filled when the Spark procedure uses the INVOKER security mode. It is inferred from the system variable @@spark_proc_properties.staging_bucket if it is provided. Otherwise, BigQuery creates a default staging bucket for the job and returns the bucket name in this field. Example: * &#x60;gs://[bucket_name]&#x60; | [optional] [readonly] 
**kms_key_name** | **str** | Output only. The Cloud KMS encryption key that is used to protect the resources created by the Spark job. If the Spark procedure uses DEFINER security mode, the Cloud KMS key is inferred from the Spark connection associated with the procedure if it is provided. Otherwise the key is inferred from the default key of the Spark connection&#39;s project if the CMEK organization policy is enforced. If the Spark procedure uses INVOKER security mode, the Cloud KMS encryption key is inferred from the system variable @@spark_proc_properties.kms_key_name if it is provided. Otherwise, the key is inferred fromt he default key of the BigQuery job&#39;s project if the CMEK organization policy is enforced. Example: * &#x60;projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]&#x60; | [optional] [readonly] 
**logging_info** | [**SparkLoggingInfo**](SparkLoggingInfo.md) |  | [optional] 
**spark_job_id** | **str** | Output only. Spark job ID if a Spark job is created successfully. | [optional] [readonly] 
**spark_job_location** | **str** | Output only. Location where the Spark job is executed. A location is selected by BigQueury for jobs configured to run in a multi-region. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spark_statistics import SparkStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of SparkStatistics from a JSON string
spark_statistics_instance = SparkStatistics.from_json(json)
# print the JSON string representation of the object
print(SparkStatistics.to_json())

# convert the object into a dict
spark_statistics_dict = spark_statistics_instance.to_dict()
# create an instance of SparkStatistics from a dict
spark_statistics_from_dict = SparkStatistics.from_dict(spark_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


