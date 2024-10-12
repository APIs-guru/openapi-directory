# GitRemoteSettings

Controls Git remote configuration for a repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_token_secret_version** | **str** | Optional. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format &#x60;projects/*/secrets/*/versions/*&#x60;. | [optional] 
**default_branch** | **str** | Required. The Git remote&#39;s default branch name. | [optional] 
**ssh_authentication_config** | [**SshAuthenticationConfig**](SshAuthenticationConfig.md) |  | [optional] 
**token_status** | **str** | Output only. Deprecated: The field does not contain any token status information. Instead use https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories/computeAccessTokenStatus | [optional] [readonly] 
**url** | **str** | Required. The Git remote&#39;s URL. | [optional] 

## Example

```python
from openapi_client.models.git_remote_settings import GitRemoteSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GitRemoteSettings from a JSON string
git_remote_settings_instance = GitRemoteSettings.from_json(json)
# print the JSON string representation of the object
print(GitRemoteSettings.to_json())

# convert the object into a dict
git_remote_settings_dict = git_remote_settings_instance.to_dict()
# create an instance of GitRemoteSettings from a dict
git_remote_settings_from_dict = GitRemoteSettings.from_dict(git_remote_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


