# GoogleCloudChannelV1MarketingInfo

Represents the marketing information for a Product, SKU or Offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_logo** | [**GoogleCloudChannelV1Media**](GoogleCloudChannelV1Media.md) |  | [optional] 
**description** | **str** | Human readable description. Description can contain HTML. | [optional] 
**display_name** | **str** | Human readable name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_marketing_info import GoogleCloudChannelV1MarketingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1MarketingInfo from a JSON string
google_cloud_channel_v1_marketing_info_instance = GoogleCloudChannelV1MarketingInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1MarketingInfo.to_json())

# convert the object into a dict
google_cloud_channel_v1_marketing_info_dict = google_cloud_channel_v1_marketing_info_instance.to_dict()
# create an instance of GoogleCloudChannelV1MarketingInfo from a dict
google_cloud_channel_v1_marketing_info_from_dict = GoogleCloudChannelV1MarketingInfo.from_dict(google_cloud_channel_v1_marketing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


