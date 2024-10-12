# ManagedInstanceFamilyCapability

The managed server family capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Family name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**sku** | **str** | SKU name. | [optional] [readonly] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_license_types** | [**List[LicenseTypeCapability]**](LicenseTypeCapability.md) | List of supported license types. | [optional] [readonly] 
**supported_vcores_values** | [**List[ManagedInstanceVcoresCapability]**](ManagedInstanceVcoresCapability.md) | List of supported virtual cores values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_family_capability import ManagedInstanceFamilyCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceFamilyCapability from a JSON string
managed_instance_family_capability_instance = ManagedInstanceFamilyCapability.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceFamilyCapability.to_json())

# convert the object into a dict
managed_instance_family_capability_dict = managed_instance_family_capability_instance.to_dict()
# create an instance of ManagedInstanceFamilyCapability from a dict
managed_instance_family_capability_from_dict = ManagedInstanceFamilyCapability.from_dict(managed_instance_family_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


