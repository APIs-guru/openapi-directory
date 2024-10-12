# ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository

Location of the source in a 2nd-gen Google Cloud Build repository resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dir** | **str** | Directory, relative to the source root, in which to run the build. | [optional] 
**repository** | **str** | Required. Name of the Google Cloud Build repository, formatted as &#x60;projects/*/locations/*/connections/*/repositories/*&#x60;. | [optional] 
**revision** | **str** | The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_connected_repository import ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_connected_repository_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_connected_repository_dict = containeranalysis_google_devtools_cloudbuild_v1_connected_repository_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository from a dict
containeranalysis_google_devtools_cloudbuild_v1_connected_repository_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository.from_dict(containeranalysis_google_devtools_cloudbuild_v1_connected_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


