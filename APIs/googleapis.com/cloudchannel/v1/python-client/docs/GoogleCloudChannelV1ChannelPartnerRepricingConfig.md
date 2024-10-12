# GoogleCloudChannelV1ChannelPartnerRepricingConfig

Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the ChannelPartnerRepricingConfig. Format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}. | [optional] [readonly] 
**repricing_config** | [**GoogleCloudChannelV1RepricingConfig**](GoogleCloudChannelV1RepricingConfig.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp of an update to the repricing rule. If &#x60;update_time&#x60; is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_channel_partner_repricing_config import GoogleCloudChannelV1ChannelPartnerRepricingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ChannelPartnerRepricingConfig from a JSON string
google_cloud_channel_v1_channel_partner_repricing_config_instance = GoogleCloudChannelV1ChannelPartnerRepricingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ChannelPartnerRepricingConfig.to_json())

# convert the object into a dict
google_cloud_channel_v1_channel_partner_repricing_config_dict = google_cloud_channel_v1_channel_partner_repricing_config_instance.to_dict()
# create an instance of GoogleCloudChannelV1ChannelPartnerRepricingConfig from a dict
google_cloud_channel_v1_channel_partner_repricing_config_from_dict = GoogleCloudChannelV1ChannelPartnerRepricingConfig.from_dict(google_cloud_channel_v1_channel_partner_repricing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


