# InstancePoolFamilyCapability

The instance pool family capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Family name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_license_types** | [**List[LicenseTypeCapability]**](LicenseTypeCapability.md) | List of supported license types. | [optional] [readonly] 
**supported_vcores_values** | [**List[InstancePoolVcoresCapability]**](InstancePoolVcoresCapability.md) | List of supported virtual cores values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_pool_family_capability import InstancePoolFamilyCapability

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePoolFamilyCapability from a JSON string
instance_pool_family_capability_instance = InstancePoolFamilyCapability.from_json(json)
# print the JSON string representation of the object
print(InstancePoolFamilyCapability.to_json())

# convert the object into a dict
instance_pool_family_capability_dict = instance_pool_family_capability_instance.to_dict()
# create an instance of InstancePoolFamilyCapability from a dict
instance_pool_family_capability_from_dict = InstancePoolFamilyCapability.from_dict(instance_pool_family_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


