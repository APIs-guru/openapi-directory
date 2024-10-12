# PySparkBatch

A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS URIs of files to be placed in the working directory of each executor. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. | [optional] 
**main_python_file_uri** | **str** | Required. The HCFS URI of the main Python file to use as the Spark driver. Must be a .py file. | [optional] 
**python_file_uris** | **List[str]** | Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. | [optional] 

## Example

```python
from openapi_client.models.py_spark_batch import PySparkBatch

# TODO update the JSON string below
json = "{}"
# create an instance of PySparkBatch from a JSON string
py_spark_batch_instance = PySparkBatch.from_json(json)
# print the JSON string representation of the object
print(PySparkBatch.to_json())

# convert the object into a dict
py_spark_batch_dict = py_spark_batch_instance.to_dict()
# create an instance of PySparkBatch from a dict
py_spark_batch_from_dict = PySparkBatch.from_dict(py_spark_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


