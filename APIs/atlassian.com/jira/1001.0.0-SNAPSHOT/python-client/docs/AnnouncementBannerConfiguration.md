# AnnouncementBannerConfiguration

Announcement banner configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash_id** | **str** | Hash of the banner data. The client detects updates by comparing hash IDs. | [optional] [readonly] 
**is_dismissible** | **bool** | Flag indicating if the announcement banner can be dismissed by the user. | [optional] [readonly] 
**is_enabled** | **bool** | Flag indicating if the announcement banner is enabled or not. | [optional] [readonly] 
**message** | **str** | The text on the announcement banner. | [optional] [readonly] 
**visibility** | **str** | Visibility of the announcement banner. | [optional] [readonly] 

## Example

```python
from openapi_client.models.announcement_banner_configuration import AnnouncementBannerConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AnnouncementBannerConfiguration from a JSON string
announcement_banner_configuration_instance = AnnouncementBannerConfiguration.from_json(json)
# print the JSON string representation of the object
print(AnnouncementBannerConfiguration.to_json())

# convert the object into a dict
announcement_banner_configuration_dict = announcement_banner_configuration_instance.to_dict()
# create an instance of AnnouncementBannerConfiguration from a dict
announcement_banner_configuration_from_dict = AnnouncementBannerConfiguration.from_dict(announcement_banner_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


