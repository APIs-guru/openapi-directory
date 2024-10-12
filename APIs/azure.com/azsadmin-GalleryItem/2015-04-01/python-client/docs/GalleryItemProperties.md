# GalleryItemProperties

Properties of a gallery item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | **Dict[str, str]** | List of additional properties provided for the item. | [optional] [readonly] 
**artifacts** | [**List[Artifact]**](Artifact.md) | List of artifacts for the gallery item. | [optional] [readonly] 
**category_ids** | **List[str]** | List of category IDs the gallery item belongs to. | [optional] [readonly] 
**changed_time** | **datetime** | Last update time of gallery item. | [optional] 
**created_time** | **datetime** | The date and time that the gallery item was created. | [optional] 
**definition_templates** | [**DefinitionTemplates**](DefinitionTemplates.md) |  | [optional] 
**description** | **str** | The description of the gallery item. | [optional] 
**filters** | [**List[Filter]**](Filter.md) | List of filters for the gallery item. | [optional] [readonly] 
**icon_file_uris** | [**GalleryItemPropertiesIconFileUris**](GalleryItemPropertiesIconFileUris.md) |  | [optional] 
**identity** | **str** | Identity of the gallery item. | [optional] 
**images** | [**List[ImageGroup]**](ImageGroup.md) | List of images. | [optional] [readonly] 
**item_display_name** | **str** | Displayed name in the portal. | [optional] 
**item_name** | **str** | The display name for the gallery item, for the locale of the request. | [optional] 
**item_type** | **str** | Describes the type of the gallery item, either GalleryItem or ItemGroup. | [optional] 
**links** | [**List[LinkProperties]**](LinkProperties.md) | Links provided for the item. | [optional] [readonly] 
**long_summary** | **str** | Long summary of the gallery item. | [optional] 
**marketing_material** | [**MarketingMaterial**](MarketingMaterial.md) |  | [optional] 
**metadata** | [**OpenProperty**](OpenProperty.md) |  | [optional] 
**products** | [**List[Product]**](Product.md) | List of products. | [optional] [readonly] 
**properties** | **Dict[str, str]** | List of properties provided for the gallery item. | [optional] [readonly] 
**publisher** | **str** | The publisher of the gallery item. | [optional] 
**publisher_display_name** | **str** | Display name of the publisher. | [optional] 
**resource_group_name** | **str** | Resource group name the gallery item belongs too. | [optional] 
**screenshot_uris** | **List[str]** | List of screenshot image URIs provided for the item. | [optional] [readonly] 
**summary** | **str** | Short summary of the gallery item. | [optional] 
**ui_definition_uri** | **str** | The URL of the view definition object that defines the UI information that is used when an instance of the gallery item resource definition is created. | [optional] 
**version** | **str** | The version identifier of the gallery item, in Major.Minor.Build format. | [optional] 

## Example

```python
from openapi_client.models.gallery_item_properties import GalleryItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryItemProperties from a JSON string
gallery_item_properties_instance = GalleryItemProperties.from_json(json)
# print the JSON string representation of the object
print(GalleryItemProperties.to_json())

# convert the object into a dict
gallery_item_properties_dict = gallery_item_properties_instance.to_dict()
# create an instance of GalleryItemProperties from a dict
gallery_item_properties_from_dict = GalleryItemProperties.from_dict(gallery_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


