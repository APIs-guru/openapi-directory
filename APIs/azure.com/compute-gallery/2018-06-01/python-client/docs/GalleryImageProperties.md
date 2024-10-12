# GalleryImageProperties

Describes the properties of a gallery Image Definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this gallery Image Definition resource. This property is updatable. | [optional] 
**disallowed** | [**Disallowed**](Disallowed.md) |  | [optional] 
**end_of_life_date** | **datetime** | The end of life date of the gallery Image Definition. This property can be used for decommissioning purposes. This property is updatable. | [optional] 
**eula** | **str** | The Eula agreement for the gallery Image Definition. | [optional] 
**identifier** | [**GalleryImageIdentifier**](GalleryImageIdentifier.md) |  | 
**os_state** | **str** | The allowed values for OS State are &#39;Generalized&#39;. | 
**os_type** | **str** | This property allows you to specify the type of the OS that is included in the disk when creating a VM from a managed image. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux** | 
**privacy_statement_uri** | **str** | The privacy statement uri. | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**purchase_plan** | [**ImagePurchasePlan**](ImagePurchasePlan.md) |  | [optional] 
**recommended** | [**RecommendedMachineConfiguration**](RecommendedMachineConfiguration.md) |  | [optional] 
**release_note_uri** | **str** | The release note uri. | [optional] 

## Example

```python
from openapi_client.models.gallery_image_properties import GalleryImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageProperties from a JSON string
gallery_image_properties_instance = GalleryImageProperties.from_json(json)
# print the JSON string representation of the object
print(GalleryImageProperties.to_json())

# convert the object into a dict
gallery_image_properties_dict = gallery_image_properties_instance.to_dict()
# create an instance of GalleryImageProperties from a dict
gallery_image_properties_from_dict = GalleryImageProperties.from_dict(gallery_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


