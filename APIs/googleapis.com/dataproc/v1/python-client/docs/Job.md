# Job

A Dataproc job resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled. | [optional] [readonly] 
**driver_control_files_uri** | **str** | Output only. If present, the location of miscellaneous control files which can be used as part of job setup and handling. If not present, control files might be placed in the same location as driver_output_uri. | [optional] [readonly] 
**driver_output_resource_uri** | **str** | Output only. A URI pointing to the location of the stdout of the job&#39;s driver program. | [optional] [readonly] 
**driver_scheduling_config** | [**DriverSchedulingConfig**](DriverSchedulingConfig.md) |  | [optional] 
**flink_job** | [**FlinkJob**](FlinkJob.md) |  | [optional] 
**hadoop_job** | [**HadoopJob**](HadoopJob.md) |  | [optional] 
**hive_job** | [**HiveJob**](HiveJob.md) |  | [optional] 
**job_uuid** | **str** | Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that might be reused over time. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job. | [optional] 
**pig_job** | [**PigJob**](PigJob.md) |  | [optional] 
**placement** | [**JobPlacement**](JobPlacement.md) |  | [optional] 
**presto_job** | [**PrestoJob**](PrestoJob.md) |  | [optional] 
**pyspark_job** | [**PySparkJob**](PySparkJob.md) |  | [optional] 
**reference** | [**JobReference**](JobReference.md) |  | [optional] 
**scheduling** | [**JobScheduling**](JobScheduling.md) |  | [optional] 
**spark_job** | [**SparkJob**](SparkJob.md) |  | [optional] 
**spark_r_job** | [**SparkRJob**](SparkRJob.md) |  | [optional] 
**spark_sql_job** | [**SparkSqlJob**](SparkSqlJob.md) |  | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**status_history** | [**List[JobStatus]**](JobStatus.md) | Output only. The previous job status. | [optional] [readonly] 
**trino_job** | [**TrinoJob**](TrinoJob.md) |  | [optional] 
**yarn_applications** | [**List[YarnApplication]**](YarnApplication.md) | Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It might be changed before final release. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


