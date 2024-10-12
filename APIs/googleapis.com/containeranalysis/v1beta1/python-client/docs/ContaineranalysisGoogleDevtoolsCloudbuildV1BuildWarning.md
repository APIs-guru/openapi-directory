# ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning

A non-fatal problem encountered during the execution of the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **str** | The priority for this warning. | [optional] 
**text** | **str** | Explanation of the warning generated. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_build_warning import ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_build_warning_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_build_warning_dict = containeranalysis_google_devtools_cloudbuild_v1_build_warning_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning from a dict
containeranalysis_google_devtools_cloudbuild_v1_build_warning_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning.from_dict(containeranalysis_google_devtools_cloudbuild_v1_build_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


