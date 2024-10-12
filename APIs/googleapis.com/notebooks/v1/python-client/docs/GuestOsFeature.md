# GuestOsFeature

Guest OS features for boot disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The ID of a supported feature. Read Enabling guest operating system features to see a list of available options. Valid values: * &#x60;FEATURE_TYPE_UNSPECIFIED&#x60; * &#x60;MULTI_IP_SUBNET&#x60; * &#x60;SECURE_BOOT&#x60; * &#x60;UEFI_COMPATIBLE&#x60; * &#x60;VIRTIO_SCSI_MULTIQUEUE&#x60; * &#x60;WINDOWS&#x60; | [optional] 

## Example

```python
from openapi_client.models.guest_os_feature import GuestOsFeature

# TODO update the JSON string below
json = "{}"
# create an instance of GuestOsFeature from a JSON string
guest_os_feature_instance = GuestOsFeature.from_json(json)
# print the JSON string representation of the object
print(GuestOsFeature.to_json())

# convert the object into a dict
guest_os_feature_dict = guest_os_feature_instance.to_dict()
# create an instance of GuestOsFeature from a dict
guest_os_feature_from_dict = GuestOsFeature.from_dict(guest_os_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


