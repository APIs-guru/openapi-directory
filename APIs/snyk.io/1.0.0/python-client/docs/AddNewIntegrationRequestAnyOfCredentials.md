# AddNewIntegrationRequestAnyOfCredentials

credentials for given integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOfAcrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOfAcrCredentials.md) |  | [optional] 
**artifactory_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf1ArtifactoryCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf1ArtifactoryCrCredentials.md) |  | [optional] 
**azure_repos_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf2AzureReposCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf2AzureReposCredentials.md) |  | [optional] 
**bitbucket_cloud_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf3BitbucketCloudCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf3BitbucketCloudCredentials.md) |  | [optional] 
**bitbucket_server_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf4BitbucketServerCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf4BitbucketServerCredentials.md) |  | [optional] 
**digital_ocean_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf5DigitalOceanCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf5DigitalOceanCrCredentials.md) |  | [optional] 
**docker_hub_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf6DockerHubCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf6DockerHubCredentials.md) |  | [optional] 
**ecr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf7EcrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf7EcrCredentials.md) |  | [optional] 
**gcr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf8GcrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf8GcrCredentials.md) |  | [optional] 
**git_hub_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf9GitHubCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf9GitHubCredentials.md) |  | [optional] 
**git_hub_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf10GitHubCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf10GitHubCrCredentials.md) |  | [optional] 
**git_hub_enterprise_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf11GitHubEnterpriseCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf11GitHubEnterpriseCredentials.md) |  | [optional] 
**git_lab_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf12GitLabCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf12GitLabCredentials.md) |  | [optional] 
**git_lab_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf13GitLabCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf13GitLabCrCredentials.md) |  | [optional] 
**google_artifact_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf14GoogleArtifactCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf14GoogleArtifactCrCredentials.md) |  | [optional] 
**harbor_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf15HarborCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf15HarborCrCredentials.md) |  | [optional] 
**nexus_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf16NexusCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf16NexusCrCredentials.md) |  | [optional] 
**quay_cr_credentials** | [**AddNewIntegrationRequestAnyOfCredentialsOneOf17QuayCrCredentials**](AddNewIntegrationRequestAnyOfCredentialsOneOf17QuayCrCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_new_integration_request_any_of_credentials import AddNewIntegrationRequestAnyOfCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewIntegrationRequestAnyOfCredentials from a JSON string
add_new_integration_request_any_of_credentials_instance = AddNewIntegrationRequestAnyOfCredentials.from_json(json)
# print the JSON string representation of the object
print(AddNewIntegrationRequestAnyOfCredentials.to_json())

# convert the object into a dict
add_new_integration_request_any_of_credentials_dict = add_new_integration_request_any_of_credentials_instance.to_dict()
# create an instance of AddNewIntegrationRequestAnyOfCredentials from a dict
add_new_integration_request_any_of_credentials_from_dict = AddNewIntegrationRequestAnyOfCredentials.from_dict(add_new_integration_request_any_of_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


