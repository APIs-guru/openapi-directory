# YoutubeAndPartnersInventorySourceConfig

Settings that control what YouTube related inventories the YouTube and Partners line item will target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_google_tv** | **bool** | Optional. Whether to target inventory in video apps available with Google TV. | [optional] 
**include_youtube** | **bool** | Optional. Whether to target inventory on YouTube. This includes both search, channels and videos. | [optional] 
**include_youtube_video_partners** | **bool** | Whether to target inventory on a collection of partner sites and apps that follow the same brand safety standards as YouTube. | [optional] 

## Example

```python
from openapi_client.models.youtube_and_partners_inventory_source_config import YoutubeAndPartnersInventorySourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeAndPartnersInventorySourceConfig from a JSON string
youtube_and_partners_inventory_source_config_instance = YoutubeAndPartnersInventorySourceConfig.from_json(json)
# print the JSON string representation of the object
print(YoutubeAndPartnersInventorySourceConfig.to_json())

# convert the object into a dict
youtube_and_partners_inventory_source_config_dict = youtube_and_partners_inventory_source_config_instance.to_dict()
# create an instance of YoutubeAndPartnersInventorySourceConfig from a dict
youtube_and_partners_inventory_source_config_from_dict = YoutubeAndPartnersInventorySourceConfig.from_dict(youtube_and_partners_inventory_source_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


