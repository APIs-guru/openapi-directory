# OSPolicyResourceRepositoryResourceAptRepository

Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_type** | **str** | Required. Type of archive files in this repository. | [optional] 
**components** | **List[str]** | Required. List of components for this repository. Must contain at least one item. | [optional] 
**distribution** | **str** | Required. Distribution of this repository. | [optional] 
**gpg_key** | **str** | URI of the key file for this repository. The agent maintains a keyring at &#x60;/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg&#x60;. | [optional] 
**uri** | **str** | Required. URI for this repository. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_repository_resource_apt_repository import OSPolicyResourceRepositoryResourceAptRepository

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceRepositoryResourceAptRepository from a JSON string
os_policy_resource_repository_resource_apt_repository_instance = OSPolicyResourceRepositoryResourceAptRepository.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceRepositoryResourceAptRepository.to_json())

# convert the object into a dict
os_policy_resource_repository_resource_apt_repository_dict = os_policy_resource_repository_resource_apt_repository_instance.to_dict()
# create an instance of OSPolicyResourceRepositoryResourceAptRepository from a dict
os_policy_resource_repository_resource_apt_repository_from_dict = OSPolicyResourceRepositoryResourceAptRepository.from_dict(os_policy_resource_repository_resource_apt_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


