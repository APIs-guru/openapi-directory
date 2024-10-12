# GoogleDevtoolsContaineranalysisV1alpha1RepoId

A unique identifier for a Cloud Repo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_repo_id** | [**GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId**](GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId.md) |  | [optional] 
**uid** | **str** | A server-assigned, globally unique identifier. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_repo_id import GoogleDevtoolsContaineranalysisV1alpha1RepoId

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1RepoId from a JSON string
google_devtools_containeranalysis_v1alpha1_repo_id_instance = GoogleDevtoolsContaineranalysisV1alpha1RepoId.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1RepoId.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_repo_id_dict = google_devtools_containeranalysis_v1alpha1_repo_id_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1RepoId from a dict
google_devtools_containeranalysis_v1alpha1_repo_id_from_dict = GoogleDevtoolsContaineranalysisV1alpha1RepoId.from_dict(google_devtools_containeranalysis_v1alpha1_repo_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


