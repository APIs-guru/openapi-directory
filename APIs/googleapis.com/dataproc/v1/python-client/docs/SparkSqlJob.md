# SparkSqlJob

A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure Spark SQL&#39;s SparkConf. Properties that conflict with values set by the Dataproc API might be overwritten. | [optional] 
**query_file_uri** | **str** | The HCFS URI of the script that contains SQL queries. | [optional] 
**query_list** | [**QueryList**](QueryList.md) |  | [optional] 
**script_variables** | **Dict[str, str]** | Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name&#x3D;\&quot;value\&quot;;). | [optional] 

## Example

```python
from openapi_client.models.spark_sql_job import SparkSqlJob

# TODO update the JSON string below
json = "{}"
# create an instance of SparkSqlJob from a JSON string
spark_sql_job_instance = SparkSqlJob.from_json(json)
# print the JSON string representation of the object
print(SparkSqlJob.to_json())

# convert the object into a dict
spark_sql_job_dict = spark_sql_job_instance.to_dict()
# create an instance of SparkSqlJob from a dict
spark_sql_job_from_dict = SparkSqlJob.from_dict(spark_sql_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


