# OSPolicyResourceRepositoryResource

A resource that manages a package repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt** | [**OSPolicyResourceRepositoryResourceAptRepository**](OSPolicyResourceRepositoryResourceAptRepository.md) |  | [optional] 
**goo** | [**OSPolicyResourceRepositoryResourceGooRepository**](OSPolicyResourceRepositoryResourceGooRepository.md) |  | [optional] 
**yum** | [**OSPolicyResourceRepositoryResourceYumRepository**](OSPolicyResourceRepositoryResourceYumRepository.md) |  | [optional] 
**zypper** | [**OSPolicyResourceRepositoryResourceZypperRepository**](OSPolicyResourceRepositoryResourceZypperRepository.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_repository_resource import OSPolicyResourceRepositoryResource

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceRepositoryResource from a JSON string
os_policy_resource_repository_resource_instance = OSPolicyResourceRepositoryResource.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceRepositoryResource.to_json())

# convert the object into a dict
os_policy_resource_repository_resource_dict = os_policy_resource_repository_resource_instance.to_dict()
# create an instance of OSPolicyResourceRepositoryResource from a dict
os_policy_resource_repository_resource_from_dict = OSPolicyResourceRepositoryResource.from_dict(os_policy_resource_repository_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


