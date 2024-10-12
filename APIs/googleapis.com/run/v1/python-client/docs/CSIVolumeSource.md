# CSIVolumeSource

Storage volume source using the Container Storage Interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | **str** | name of the CSI driver for the requested storage system. Cloud Run supports the following drivers: * gcsfuse.run.googleapis.com : Mount a Cloud Storage Bucket as a volume. | [optional] 
**read_only** | **bool** | If true, mount the volume as read only. Defaults to false. | [optional] 
**volume_attributes** | **Dict[str, str]** | stores driver specific attributes. For Google Cloud Storage volumes, the following attributes are supported: * bucketName: the name of the Cloud Storage bucket to mount. The Cloud Run Service identity must have access to this bucket. | [optional] 

## Example

```python
from openapi_client.models.csi_volume_source import CSIVolumeSource

# TODO update the JSON string below
json = "{}"
# create an instance of CSIVolumeSource from a JSON string
csi_volume_source_instance = CSIVolumeSource.from_json(json)
# print the JSON string representation of the object
print(CSIVolumeSource.to_json())

# convert the object into a dict
csi_volume_source_dict = csi_volume_source_instance.to_dict()
# create an instance of CSIVolumeSource from a dict
csi_volume_source_from_dict = CSIVolumeSource.from_dict(csi_volume_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


