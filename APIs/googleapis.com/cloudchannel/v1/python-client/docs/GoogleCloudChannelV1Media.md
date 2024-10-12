# GoogleCloudChannelV1Media

Represents media information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | URL of the media. | [optional] 
**title** | **str** | Title of the media. | [optional] 
**type** | **str** | Type of the media. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_media import GoogleCloudChannelV1Media

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Media from a JSON string
google_cloud_channel_v1_media_instance = GoogleCloudChannelV1Media.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Media.to_json())

# convert the object into a dict
google_cloud_channel_v1_media_dict = google_cloud_channel_v1_media_instance.to_dict()
# create an instance of GoogleCloudChannelV1Media from a dict
google_cloud_channel_v1_media_from_dict = GoogleCloudChannelV1Media.from_dict(google_cloud_channel_v1_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


