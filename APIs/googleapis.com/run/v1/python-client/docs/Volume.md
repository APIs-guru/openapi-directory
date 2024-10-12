# Volume

Volume represents a named volume in a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_map** | [**ConfigMapVolumeSource**](ConfigMapVolumeSource.md) |  | [optional] 
**csi** | [**CSIVolumeSource**](CSIVolumeSource.md) |  | [optional] 
**empty_dir** | [**EmptyDirVolumeSource**](EmptyDirVolumeSource.md) |  | [optional] 
**name** | **str** | Volume&#39;s name. In Cloud Run Fully Managed, the name &#39;cloudsql&#39; is reserved. | [optional] 
**nfs** | [**NFSVolumeSource**](NFSVolumeSource.md) |  | [optional] 
**secret** | [**SecretVolumeSource**](SecretVolumeSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.volume import Volume

# TODO update the JSON string below
json = "{}"
# create an instance of Volume from a JSON string
volume_instance = Volume.from_json(json)
# print the JSON string representation of the object
print(Volume.to_json())

# convert the object into a dict
volume_dict = volume_instance.to_dict()
# create an instance of Volume from a dict
volume_from_dict = Volume.from_dict(volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


