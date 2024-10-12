# ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption

Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The &#x60;WorkerPool&#x60; resource to execute the build on. You must have &#x60;cloudbuild.workerpools.use&#x60; on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_build_options_pool_option import ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_build_options_pool_option_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_build_options_pool_option_dict = containeranalysis_google_devtools_cloudbuild_v1_build_options_pool_option_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption from a dict
containeranalysis_google_devtools_cloudbuild_v1_build_options_pool_option_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption.from_dict(containeranalysis_google_devtools_cloudbuild_v1_build_options_pool_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


