# ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource

Location of the source in any accessible Git repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dir** | **str** | Directory, relative to the source root, in which to run the build. This must be a relative path. If a step&#39;s &#x60;dir&#x60; is specified and is an absolute path, this value is ignored for that step&#39;s execution. | [optional] 
**revision** | **str** | The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses &#x60;git fetch&#x60; to fetch the revision from the Git repository; therefore make sure that the string you provide for &#x60;revision&#x60; is parsable by the command. For information on string values accepted by &#x60;git fetch&#x60;, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on &#x60;git fetch&#x60;, see https://git-scm.com/docs/git-fetch. | [optional] 
**url** | **str** | Location of the Git repo to build. This will be used as a &#x60;git remote&#x60;, see https://git-scm.com/docs/git-remote. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_git_source import ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_git_source_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_git_source_dict = containeranalysis_google_devtools_cloudbuild_v1_git_source_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource from a dict
containeranalysis_google_devtools_cloudbuild_v1_git_source_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource.from_dict(containeranalysis_google_devtools_cloudbuild_v1_git_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


