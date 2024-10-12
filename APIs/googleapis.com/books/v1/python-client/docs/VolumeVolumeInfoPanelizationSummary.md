# VolumeVolumeInfoPanelizationSummary

A top-level summary of the panelization info in this volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains_epub_bubbles** | **bool** |  | [optional] 
**contains_image_bubbles** | **bool** |  | [optional] 
**epub_bubble_version** | **str** |  | [optional] 
**image_bubble_version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.volume_volume_info_panelization_summary import VolumeVolumeInfoPanelizationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeVolumeInfoPanelizationSummary from a JSON string
volume_volume_info_panelization_summary_instance = VolumeVolumeInfoPanelizationSummary.from_json(json)
# print the JSON string representation of the object
print(VolumeVolumeInfoPanelizationSummary.to_json())

# convert the object into a dict
volume_volume_info_panelization_summary_dict = volume_volume_info_panelization_summary_instance.to_dict()
# create an instance of VolumeVolumeInfoPanelizationSummary from a dict
volume_volume_info_panelization_summary_from_dict = VolumeVolumeInfoPanelizationSummary.from_dict(volume_volume_info_panelization_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


