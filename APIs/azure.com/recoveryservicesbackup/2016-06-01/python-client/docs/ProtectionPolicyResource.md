# ProtectionPolicyResource

The base class for backup policy. Workload-specific backup policies are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectionPolicy**](ProtectionPolicy.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource ID represents the complete path to the resource. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] 

## Example

```python
from openapi_client.models.protection_policy_resource import ProtectionPolicyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionPolicyResource from a JSON string
protection_policy_resource_instance = ProtectionPolicyResource.from_json(json)
# print the JSON string representation of the object
print(ProtectionPolicyResource.to_json())

# convert the object into a dict
protection_policy_resource_dict = protection_policy_resource_instance.to_dict()
# create an instance of ProtectionPolicyResource from a dict
protection_policy_resource_from_dict = ProtectionPolicyResource.from_dict(protection_policy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


