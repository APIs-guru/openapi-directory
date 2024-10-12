# PySparkJob

A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**main_python_file_uri** | **str** | Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file. | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. | [optional] 
**python_file_uris** | **List[str]** | Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. | [optional] 

## Example

```python
from openapi_client.models.py_spark_job import PySparkJob

# TODO update the JSON string below
json = "{}"
# create an instance of PySparkJob from a JSON string
py_spark_job_instance = PySparkJob.from_json(json)
# print the JSON string representation of the object
print(PySparkJob.to_json())

# convert the object into a dict
py_spark_job_dict = py_spark_job_instance.to_dict()
# create an instance of PySparkJob from a dict
py_spark_job_from_dict = PySparkJob.from_dict(py_spark_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


