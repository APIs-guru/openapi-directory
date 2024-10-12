# RuntimeGuestOsFeature

Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Guest OS features for boot disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The ID of a supported feature. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Valid values: * &#x60;FEATURE_TYPE_UNSPECIFIED&#x60; * &#x60;MULTI_IP_SUBNET&#x60; * &#x60;SECURE_BOOT&#x60; * &#x60;UEFI_COMPATIBLE&#x60; * &#x60;VIRTIO_SCSI_MULTIQUEUE&#x60; * &#x60;WINDOWS&#x60; | [optional] 

## Example

```python
from openapi_client.models.runtime_guest_os_feature import RuntimeGuestOsFeature

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeGuestOsFeature from a JSON string
runtime_guest_os_feature_instance = RuntimeGuestOsFeature.from_json(json)
# print the JSON string representation of the object
print(RuntimeGuestOsFeature.to_json())

# convert the object into a dict
runtime_guest_os_feature_dict = runtime_guest_os_feature_instance.to_dict()
# create an instance of RuntimeGuestOsFeature from a dict
runtime_guest_os_feature_from_dict = RuntimeGuestOsFeature.from_dict(runtime_guest_os_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


