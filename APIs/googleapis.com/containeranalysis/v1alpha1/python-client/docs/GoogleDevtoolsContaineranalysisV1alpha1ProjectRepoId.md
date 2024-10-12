# GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId

Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | The ID of the project. | [optional] 
**repo_name** | **str** | The name of the repo. Leave empty for the default repo. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_project_repo_id import GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId from a JSON string
google_devtools_containeranalysis_v1alpha1_project_repo_id_instance = GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_project_repo_id_dict = google_devtools_containeranalysis_v1alpha1_project_repo_id_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId from a dict
google_devtools_containeranalysis_v1alpha1_project_repo_id_from_dict = GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId.from_dict(google_devtools_containeranalysis_v1alpha1_project_repo_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


