# OSPolicyResourceRepositoryResourceGooRepository

Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The name of the repository. | [optional] 
**url** | **str** | Required. The url of the repository. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_repository_resource_goo_repository import OSPolicyResourceRepositoryResourceGooRepository

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceRepositoryResourceGooRepository from a JSON string
os_policy_resource_repository_resource_goo_repository_instance = OSPolicyResourceRepositoryResourceGooRepository.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceRepositoryResourceGooRepository.to_json())

# convert the object into a dict
os_policy_resource_repository_resource_goo_repository_dict = os_policy_resource_repository_resource_goo_repository_instance.to_dict()
# create an instance of OSPolicyResourceRepositoryResourceGooRepository from a dict
os_policy_resource_repository_resource_goo_repository_from_dict = OSPolicyResourceRepositoryResourceGooRepository.from_dict(os_policy_resource_repository_resource_goo_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


