# GoogleCloudDataplexV1TaskSparkTaskConfig

User-specified config for running a Spark task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**file_uris** | **List[str]** | Optional. Cloud Storage URIs of files to be placed in the working directory of each executor. | [optional] 
**infrastructure_spec** | [**GoogleCloudDataplexV1TaskInfrastructureSpec**](GoogleCloudDataplexV1TaskInfrastructureSpec.md) |  | [optional] 
**main_class** | **str** | The name of the driver&#39;s main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key&#x3D;value). | [optional] 
**main_jar_file_uri** | **str** | The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key&#x3D;value). | [optional] 
**python_script_file** | **str** | The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key&#x3D;value). | [optional] 
**sql_script** | **str** | The query text. The execution args are used to declare a set of script variables (set key&#x3D;\&quot;value\&quot;;). | [optional] 
**sql_script_file** | **str** | A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key&#x3D;\&quot;value\&quot;;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_spark_task_config import GoogleCloudDataplexV1TaskSparkTaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskSparkTaskConfig from a JSON string
google_cloud_dataplex_v1_task_spark_task_config_instance = GoogleCloudDataplexV1TaskSparkTaskConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskSparkTaskConfig.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_spark_task_config_dict = google_cloud_dataplex_v1_task_spark_task_config_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskSparkTaskConfig from a dict
google_cloud_dataplex_v1_task_spark_task_config_from_dict = GoogleCloudDataplexV1TaskSparkTaskConfig.from_dict(google_cloud_dataplex_v1_task_spark_task_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


