# Repository

Represents a Dataform Git repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp of when the repository was created. | [optional] [readonly] 
**display_name** | **str** | Optional. The repository&#39;s user-friendly name. | [optional] 
**git_remote_settings** | [**GitRemoteSettings**](GitRemoteSettings.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Repository user labels. | [optional] 
**name** | **str** | Output only. The repository&#39;s name. | [optional] [readonly] 
**npmrc_environment_variables_secret_version** | **str** | Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format &#x60;projects/*/secrets/*/versions/*&#x60;. The file itself must be in a JSON format. | [optional] 
**service_account** | **str** | Optional. The service account to run workflow invocations under. | [optional] 
**set_authenticated_user_admin** | **bool** | Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories | [optional] 
**workspace_compilation_overrides** | [**WorkspaceCompilationOverrides**](WorkspaceCompilationOverrides.md) |  | [optional] 

## Example

```python
from openapi_client.models.repository import Repository

# TODO update the JSON string below
json = "{}"
# create an instance of Repository from a JSON string
repository_instance = Repository.from_json(json)
# print the JSON string representation of the object
print(Repository.to_json())

# convert the object into a dict
repository_dict = repository_instance.to_dict()
# create an instance of Repository from a dict
repository_from_dict = Repository.from_dict(repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


