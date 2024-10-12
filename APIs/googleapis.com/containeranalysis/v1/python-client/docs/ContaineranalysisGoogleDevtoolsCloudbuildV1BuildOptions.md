# ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions

Optional arguments to enable specific features of builds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automap_substitutions** | **bool** | Option to include built-in and custom substitutions as env variables for all build steps. | [optional] 
**default_logs_bucket_behavior** | **str** | Optional. Option to specify how default logs buckets are setup. | [optional] 
**disk_size_gb** | **str** | Requested disk size for the VM that runs the build. Note that this is *NOT* \&quot;disk free\&quot;; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. | [optional] 
**dynamic_substitutions** | **bool** | Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. | [optional] 
**env** | **List[str]** | A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form \&quot;KEY&#x3D;VALUE\&quot; for the environment variable \&quot;KEY\&quot; being given the value \&quot;VALUE\&quot;. | [optional] 
**log_streaming_option** | **str** | Option to define build log streaming behavior to Cloud Storage. | [optional] 
**logging** | **str** | Option to specify the logging mode, which determines if and where build logs are stored. | [optional] 
**machine_type** | **str** | Compute Engine machine type on which to run the build. | [optional] 
**pool** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption**](ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption.md) |  | [optional] 
**requested_verify_option** | **str** | Requested verifiability options. | [optional] 
**secret_env** | **List[str]** | A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build&#39;s &#x60;Secret&#x60;. These variables will be available to all build steps in this build. | [optional] 
**source_provenance_hash** | **List[str]** | Requested hash for SourceProvenance. | [optional] 
**substitution_option** | **str** | Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. | [optional] 
**volumes** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1Volume]**](ContaineranalysisGoogleDevtoolsCloudbuildV1Volume.md) | Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. | [optional] 
**worker_pool** | **str** | This field deprecated; please use &#x60;pool.name&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_build_options import ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_build_options_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_build_options_dict = containeranalysis_google_devtools_cloudbuild_v1_build_options_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions from a dict
containeranalysis_google_devtools_cloudbuild_v1_build_options_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions.from_dict(containeranalysis_google_devtools_cloudbuild_v1_build_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


