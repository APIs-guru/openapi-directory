# OSPolicyResourceRepositoryResourceZypperRepository

Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | Required. The location of the repository directory. | [optional] 
**display_name** | **str** | The display name of the repository. | [optional] 
**gpg_keys** | **List[str]** | URIs of GPG keys. | [optional] 
**id** | **str** | Required. A one word, unique name for this repository. This is the &#x60;repo id&#x60; in the zypper config file and also the &#x60;display_name&#x60; if &#x60;display_name&#x60; is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_repository_resource_zypper_repository import OSPolicyResourceRepositoryResourceZypperRepository

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceRepositoryResourceZypperRepository from a JSON string
os_policy_resource_repository_resource_zypper_repository_instance = OSPolicyResourceRepositoryResourceZypperRepository.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceRepositoryResourceZypperRepository.to_json())

# convert the object into a dict
os_policy_resource_repository_resource_zypper_repository_dict = os_policy_resource_repository_resource_zypper_repository_instance.to_dict()
# create an instance of OSPolicyResourceRepositoryResourceZypperRepository from a dict
os_policy_resource_repository_resource_zypper_repository_from_dict = OSPolicyResourceRepositoryResourceZypperRepository.from_dict(os_policy_resource_repository_resource_zypper_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


