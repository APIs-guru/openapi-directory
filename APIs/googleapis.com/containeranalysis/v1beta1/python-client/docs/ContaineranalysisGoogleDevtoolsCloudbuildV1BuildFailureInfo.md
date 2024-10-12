# ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo

A fatal problem encountered during the execution of the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Explains the failure issue in more detail using hard-coded text. | [optional] 
**type** | **str** | The name of the failure. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_build_failure_info import ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_build_failure_info_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_build_failure_info_dict = containeranalysis_google_devtools_cloudbuild_v1_build_failure_info_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo from a dict
containeranalysis_google_devtools_cloudbuild_v1_build_failure_info_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo.from_dict(containeranalysis_google_devtools_cloudbuild_v1_build_failure_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


