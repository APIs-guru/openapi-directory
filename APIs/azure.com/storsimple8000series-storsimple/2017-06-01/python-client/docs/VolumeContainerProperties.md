# VolumeContainerProperties

The properties of volume container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**band_width_rate_in_mbps** | **int** | The bandwidth-rate set on the volume container. | [optional] 
**bandwidth_setting_id** | **str** | The ID of the bandwidth setting associated with the volume container. | [optional] 
**encryption_key** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**encryption_status** | **str** | The flag to denote whether encryption is enabled or not. | [optional] [readonly] 
**owner_ship_status** | **str** | The owner ship status of the volume container. Only when the status is \&quot;NotOwned\&quot;, the delete operation on the volume container is permitted. | [optional] [readonly] 
**storage_account_credential_id** | **str** | The path ID of storage account associated with the volume container. | 
**total_cloud_storage_usage_in_bytes** | **int** | The total cloud storage for the volume container. | [optional] [readonly] 
**volume_count** | **int** | The number of volumes in the volume Container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.volume_container_properties import VolumeContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeContainerProperties from a JSON string
volume_container_properties_instance = VolumeContainerProperties.from_json(json)
# print the JSON string representation of the object
print(VolumeContainerProperties.to_json())

# convert the object into a dict
volume_container_properties_dict = volume_container_properties_instance.to_dict()
# create an instance of VolumeContainerProperties from a dict
volume_container_properties_from_dict = VolumeContainerProperties.from_dict(volume_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


