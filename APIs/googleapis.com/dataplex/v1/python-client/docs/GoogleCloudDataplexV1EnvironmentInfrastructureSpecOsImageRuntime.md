# GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime

Software Runtime Configuration to run Analyze.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_version** | **str** | Required. Dataplex Image version. | [optional] 
**java_libraries** | **List[str]** | Optional. List of Java jars to be included in the runtime environment. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar | [optional] 
**properties** | **Dict[str, str]** | Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be \&quot;spark\&quot;. | [optional] 
**python_packages** | **List[str]** | Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment_infrastructure_spec_os_image_runtime import GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime from a JSON string
google_cloud_dataplex_v1_environment_infrastructure_spec_os_image_runtime_instance = GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_infrastructure_spec_os_image_runtime_dict = google_cloud_dataplex_v1_environment_infrastructure_spec_os_image_runtime_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime from a dict
google_cloud_dataplex_v1_environment_infrastructure_spec_os_image_runtime_from_dict = GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime.from_dict(google_cloud_dataplex_v1_environment_infrastructure_spec_os_image_runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


