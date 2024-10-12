# AcrManifestAttributesBase

Manifest details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | CPU architecture | [optional] 
**changeable_attributes** | [**ChangeableAttributes**](ChangeableAttributes.md) |  | [optional] 
**config_media_type** | **str** | Config blob media type | [optional] 
**created_time** | **str** | Created time | [optional] 
**digest** | **str** | Manifest | [optional] 
**image_size** | **int** | Image size | [optional] 
**last_update_time** | **str** | Last update time | [optional] 
**media_type** | **str** | Media type | [optional] 
**os** | **str** | Operating system | [optional] 
**tags** | **List[str]** | List of tags | [optional] 

## Example

```python
from openapi_client.models.acr_manifest_attributes_base import AcrManifestAttributesBase

# TODO update the JSON string below
json = "{}"
# create an instance of AcrManifestAttributesBase from a JSON string
acr_manifest_attributes_base_instance = AcrManifestAttributesBase.from_json(json)
# print the JSON string representation of the object
print(AcrManifestAttributesBase.to_json())

# convert the object into a dict
acr_manifest_attributes_base_dict = acr_manifest_attributes_base_instance.to_dict()
# create an instance of AcrManifestAttributesBase from a dict
acr_manifest_attributes_base_from_dict = AcrManifestAttributesBase.from_dict(acr_manifest_attributes_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


