# GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping

Resource value mapping for Sensitive Data Protection findings. If any of these mappings have a resource value that is not unspecified, the resource_value field will be ignored when reading this configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_sensitivity_mapping** | **str** | Resource value mapping for high-sensitivity Sensitive Data Protection findings | [optional] 
**medium_sensitivity_mapping** | **str** | Resource value mapping for medium-sensitivity Sensitive Data Protection findings | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_sensitive_data_protection_mapping import GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping from a JSON string
google_cloud_securitycenter_v1_sensitive_data_protection_mapping_instance = GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_sensitive_data_protection_mapping_dict = google_cloud_securitycenter_v1_sensitive_data_protection_mapping_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping from a dict
google_cloud_securitycenter_v1_sensitive_data_protection_mapping_from_dict = GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping.from_dict(google_cloud_securitycenter_v1_sensitive_data_protection_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


