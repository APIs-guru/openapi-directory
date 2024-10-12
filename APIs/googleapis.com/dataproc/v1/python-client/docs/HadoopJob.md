# HadoopJob

A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz, or .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo&#x3D;bar, that can be set as job properties, since a collision might occur that causes an incorrect job submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for naively parallel tasks. | [optional] 
**jar_file_uris** | **List[str]** | Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**main_class** | **str** | The name of the driver&#39;s main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris. | [optional] 
**main_jar_file_uri** | **str** | The HCFS URI of the jar file containing the main class. Examples: &#39;gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar&#39; &#39;hdfs:/tmp/test-samples/custom-wordcount.jar&#39; &#39;file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar&#39; | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/hadoop/conf/*-site and classes in user code. | [optional] 

## Example

```python
from openapi_client.models.hadoop_job import HadoopJob

# TODO update the JSON string below
json = "{}"
# create an instance of HadoopJob from a JSON string
hadoop_job_instance = HadoopJob.from_json(json)
# print the JSON string representation of the object
print(HadoopJob.to_json())

# convert the object into a dict
hadoop_job_dict = hadoop_job_instance.to_dict()
# create an instance of HadoopJob from a dict
hadoop_job_from_dict = HadoopJob.from_dict(hadoop_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


