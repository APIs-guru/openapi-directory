# Repository

A Repository for storing artifacts with a specific format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanup_policies** | [**Dict[str, CleanupPolicy]**](CleanupPolicy.md) | Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length. | [optional] 
**cleanup_policy_dry_run** | **bool** | Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository. | [optional] 
**create_time** | **str** | Output only. The time when the repository was created. | [optional] [readonly] 
**description** | **str** | The user-provided description of the repository. | [optional] 
**disallow_unspecified_mode** | **bool** | Optional. If this is true, aunspecified repo type will be treated as error. Is used for new repo types that don&#39;t have any specific fields. Right now is used by AOSS team when creating repos for customers. | [optional] 
**docker_config** | [**DockerRepositoryConfig**](DockerRepositoryConfig.md) |  | [optional] 
**format** | **str** | Optional. The format of packages that are stored in the repository. | [optional] 
**kms_key_name** | **str** | The Cloud KMS resource name of the customer managed encryption key that&#39;s used to encrypt the contents of the Repository. Has the form: &#x60;projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key&#x60;. This value may not be changed after the Repository has been created. | [optional] 
**labels** | **Dict[str, str]** | Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes. | [optional] 
**maven_config** | [**MavenRepositoryConfig**](MavenRepositoryConfig.md) |  | [optional] 
**mode** | **str** | Optional. The mode of the repository. | [optional] 
**name** | **str** | The name of the repository, for example: &#x60;projects/p1/locations/us-central1/repositories/repo1&#x60;. | [optional] 
**remote_repository_config** | [**RemoteRepositoryConfig**](RemoteRepositoryConfig.md) |  | [optional] 
**satisfies_pzs** | **bool** | Output only. If set, the repository satisfies physical zone separation. | [optional] [readonly] 
**size_bytes** | **str** | Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the repository was last updated. | [optional] [readonly] 
**virtual_repository_config** | [**VirtualRepositoryConfig**](VirtualRepositoryConfig.md) |  | [optional] 

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


