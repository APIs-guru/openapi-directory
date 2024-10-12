# OrderedJob

A job executed by the workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flink_job** | [**FlinkJob**](FlinkJob.md) |  | [optional] 
**hadoop_job** | [**HadoopJob**](HadoopJob.md) |  | [optional] 
**hive_job** | [**HiveJob**](HiveJob.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \\p{Ll}\\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \\p{Ll}\\p{Lo}\\p{N}_-{0,63}No more than 32 labels can be associated with a given job. | [optional] 
**pig_job** | [**PigJob**](PigJob.md) |  | [optional] 
**prerequisite_step_ids** | **List[str]** | Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow. | [optional] 
**presto_job** | [**PrestoJob**](PrestoJob.md) |  | [optional] 
**pyspark_job** | [**PySparkJob**](PySparkJob.md) |  | [optional] 
**scheduling** | [**JobScheduling**](JobScheduling.md) |  | [optional] 
**spark_job** | [**SparkJob**](SparkJob.md) |  | [optional] 
**spark_r_job** | [**SparkRJob**](SparkRJob.md) |  | [optional] 
**spark_sql_job** | [**SparkSqlJob**](SparkSqlJob.md) |  | [optional] 
**step_id** | **str** | Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters. | [optional] 
**trino_job** | [**TrinoJob**](TrinoJob.md) |  | [optional] 

## Example

```python
from openapi_client.models.ordered_job import OrderedJob

# TODO update the JSON string below
json = "{}"
# create an instance of OrderedJob from a JSON string
ordered_job_instance = OrderedJob.from_json(json)
# print the JSON string representation of the object
print(OrderedJob.to_json())

# convert the object into a dict
ordered_job_dict = ordered_job_instance.to_dict()
# create an instance of OrderedJob from a dict
ordered_job_from_dict = OrderedJob.from_dict(ordered_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


