# AnnouncementBannerConfigurationUpdate

Configuration of the announcement banner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_dismissible** | **bool** | Flag indicating if the announcement banner can be dismissed by the user. | [optional] 
**is_enabled** | **bool** | Flag indicating if the announcement banner is enabled or not. | [optional] 
**message** | **str** | The text on the announcement banner. | [optional] 
**visibility** | **str** | Visibility of the announcement banner. Can be public or private. | [optional] 

## Example

```python
from openapi_client.models.announcement_banner_configuration_update import AnnouncementBannerConfigurationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of AnnouncementBannerConfigurationUpdate from a JSON string
announcement_banner_configuration_update_instance = AnnouncementBannerConfigurationUpdate.from_json(json)
# print the JSON string representation of the object
print(AnnouncementBannerConfigurationUpdate.to_json())

# convert the object into a dict
announcement_banner_configuration_update_dict = announcement_banner_configuration_update_instance.to_dict()
# create an instance of AnnouncementBannerConfigurationUpdate from a dict
announcement_banner_configuration_update_from_dict = AnnouncementBannerConfigurationUpdate.from_dict(announcement_banner_configuration_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


