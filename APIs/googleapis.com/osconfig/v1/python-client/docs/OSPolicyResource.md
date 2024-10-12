# OSPolicyResource

An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_exec** | [**OSPolicyResourceExecResource**](OSPolicyResourceExecResource.md) |  | [optional] 
**file** | [**OSPolicyResourceFileResource**](OSPolicyResourceFileResource.md) |  | [optional] 
**id** | **str** | Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy. | [optional] 
**pkg** | [**OSPolicyResourcePackageResource**](OSPolicyResourcePackageResource.md) |  | [optional] 
**repository** | [**OSPolicyResourceRepositoryResource**](OSPolicyResourceRepositoryResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource import OSPolicyResource

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResource from a JSON string
os_policy_resource_instance = OSPolicyResource.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResource.to_json())

# convert the object into a dict
os_policy_resource_dict = os_policy_resource_instance.to_dict()
# create an instance of OSPolicyResource from a dict
os_policy_resource_from_dict = OSPolicyResource.from_dict(os_policy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


