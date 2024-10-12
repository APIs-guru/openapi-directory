# GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime

Container Image Runtime Configuration used with Batch execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | Optional. Container image to use. | [optional] 
**java_jars** | **List[str]** | Optional. A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar | [optional] 
**properties** | **Dict[str, str]** | Optional. Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties (https://cloud.google.com/dataproc/docs/concepts/cluster-properties). | [optional] 
**python_packages** | **List[str]** | Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_infrastructure_spec_container_image_runtime import GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime from a JSON string
google_cloud_dataplex_v1_task_infrastructure_spec_container_image_runtime_instance = GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_infrastructure_spec_container_image_runtime_dict = google_cloud_dataplex_v1_task_infrastructure_spec_container_image_runtime_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime from a dict
google_cloud_dataplex_v1_task_infrastructure_spec_container_image_runtime_from_dict = GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime.from_dict(google_cloud_dataplex_v1_task_infrastructure_spec_container_image_runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


