# SparkSqlBatch

A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH. | [optional] 
**query_file_uri** | **str** | Required. The HCFS URI of the script that contains Spark SQL queries to execute. | [optional] 
**query_variables** | **Dict[str, str]** | Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name&#x3D;\&quot;value\&quot;;). | [optional] 

## Example

```python
from openapi_client.models.spark_sql_batch import SparkSqlBatch

# TODO update the JSON string below
json = "{}"
# create an instance of SparkSqlBatch from a JSON string
spark_sql_batch_instance = SparkSqlBatch.from_json(json)
# print the JSON string representation of the object
print(SparkSqlBatch.to_json())

# convert the object into a dict
spark_sql_batch_dict = spark_sql_batch_instance.to_dict()
# create an instance of SparkSqlBatch from a dict
spark_sql_batch_from_dict = SparkSqlBatch.from_dict(spark_sql_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


