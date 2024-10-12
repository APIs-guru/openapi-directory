# VolumeContainerFailoverMetadata

The metadata of the volume container, that is being considered as part of a failover set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume_container_id** | **str** | The path ID of the volume container. | [optional] 
**volumes** | [**List[VolumeFailoverMetadata]**](VolumeFailoverMetadata.md) | The list of metadata of volumes inside the volume container, which contains valid cloud snapshots. | [optional] 

## Example

```python
from openapi_client.models.volume_container_failover_metadata import VolumeContainerFailoverMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeContainerFailoverMetadata from a JSON string
volume_container_failover_metadata_instance = VolumeContainerFailoverMetadata.from_json(json)
# print the JSON string representation of the object
print(VolumeContainerFailoverMetadata.to_json())

# convert the object into a dict
volume_container_failover_metadata_dict = volume_container_failover_metadata_instance.to_dict()
# create an instance of VolumeContainerFailoverMetadata from a dict
volume_container_failover_metadata_from_dict = VolumeContainerFailoverMetadata.from_dict(volume_container_failover_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


