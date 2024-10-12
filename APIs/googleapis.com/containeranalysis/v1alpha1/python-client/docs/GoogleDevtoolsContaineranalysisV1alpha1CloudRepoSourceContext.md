# GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext

A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_context** | [**GoogleDevtoolsContaineranalysisV1alpha1AliasContext**](GoogleDevtoolsContaineranalysisV1alpha1AliasContext.md) |  | [optional] 
**repo_id** | [**GoogleDevtoolsContaineranalysisV1alpha1RepoId**](GoogleDevtoolsContaineranalysisV1alpha1RepoId.md) |  | [optional] 
**revision_id** | **str** | A revision ID. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_cloud_repo_source_context import GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext from a JSON string
google_devtools_containeranalysis_v1alpha1_cloud_repo_source_context_instance = GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_cloud_repo_source_context_dict = google_devtools_containeranalysis_v1alpha1_cloud_repo_source_context_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext from a dict
google_devtools_containeranalysis_v1alpha1_cloud_repo_source_context_from_dict = GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext.from_dict(google_devtools_containeranalysis_v1alpha1_cloud_repo_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


