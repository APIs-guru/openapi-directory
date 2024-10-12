# OSPolicyResourcePackageResourceMSI

An MSI package. MSI packages only support INSTALLED state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **List[str]** | Additional properties to use during installation. This should be in the format of Property&#x3D;Setting. Appended to the defaults of &#x60;ACTION&#x3D;INSTALL REBOOT&#x3D;ReallySuppress&#x60;. | [optional] 
**source** | [**OSPolicyResourceFile**](OSPolicyResourceFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_package_resource_msi import OSPolicyResourcePackageResourceMSI

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourcePackageResourceMSI from a JSON string
os_policy_resource_package_resource_msi_instance = OSPolicyResourcePackageResourceMSI.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourcePackageResourceMSI.to_json())

# convert the object into a dict
os_policy_resource_package_resource_msi_dict = os_policy_resource_package_resource_msi_instance.to_dict()
# create an instance of OSPolicyResourcePackageResourceMSI from a dict
os_policy_resource_package_resource_msi_from_dict = OSPolicyResourcePackageResourceMSI.from_dict(os_policy_resource_package_resource_msi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


