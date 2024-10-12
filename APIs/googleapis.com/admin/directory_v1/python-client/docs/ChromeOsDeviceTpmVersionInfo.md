# ChromeOsDeviceTpmVersionInfo

Trusted Platform Module (TPM) (Read-only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: \&quot;1.2\&quot; -&gt; 312e3200 TPM 2.0: \&quot;2.0\&quot; -&gt; 322e3000 | [optional] 
**firmware_version** | **str** | TPM firmware version. | [optional] 
**manufacturer** | **str** | TPM manufacturer code. | [optional] 
**spec_level** | **str** | TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2. | [optional] 
**tpm_model** | **str** | TPM model number. | [optional] 
**vendor_specific** | **str** | Vendor-specific information such as Vendor ID. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_tpm_version_info import ChromeOsDeviceTpmVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceTpmVersionInfo from a JSON string
chrome_os_device_tpm_version_info_instance = ChromeOsDeviceTpmVersionInfo.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceTpmVersionInfo.to_json())

# convert the object into a dict
chrome_os_device_tpm_version_info_dict = chrome_os_device_tpm_version_info_instance.to_dict()
# create an instance of ChromeOsDeviceTpmVersionInfo from a dict
chrome_os_device_tpm_version_info_from_dict = ChromeOsDeviceTpmVersionInfo.from_dict(chrome_os_device_tpm_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


