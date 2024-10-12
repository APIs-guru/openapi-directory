# LicenseTypeCapability

The license type capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | License type identifier. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 

## Example

```python
from openapi_client.models.license_type_capability import LicenseTypeCapability

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseTypeCapability from a JSON string
license_type_capability_instance = LicenseTypeCapability.from_json(json)
# print the JSON string representation of the object
print(LicenseTypeCapability.to_json())

# convert the object into a dict
license_type_capability_dict = license_type_capability_instance.to_dict()
# create an instance of LicenseTypeCapability from a dict
license_type_capability_from_dict = LicenseTypeCapability.from_dict(license_type_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


