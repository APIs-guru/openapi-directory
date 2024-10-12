# GoogleCloudChannelV1RenewalSettings

Renewal settings for renewable Offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_renewal** | **bool** | If false, the plan will be completed at the end date. | [optional] 
**payment_cycle** | [**GoogleCloudChannelV1Period**](GoogleCloudChannelV1Period.md) |  | [optional] 
**payment_plan** | **str** | Describes how a reseller will be billed. | [optional] 
**resize_unit_count** | **bool** | If true and enable_renewal &#x3D; true, the unit (for example seats or licenses) will be set to the number of active units at renewal time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_renewal_settings import GoogleCloudChannelV1RenewalSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RenewalSettings from a JSON string
google_cloud_channel_v1_renewal_settings_instance = GoogleCloudChannelV1RenewalSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RenewalSettings.to_json())

# convert the object into a dict
google_cloud_channel_v1_renewal_settings_dict = google_cloud_channel_v1_renewal_settings_instance.to_dict()
# create an instance of GoogleCloudChannelV1RenewalSettings from a dict
google_cloud_channel_v1_renewal_settings_from_dict = GoogleCloudChannelV1RenewalSettings.from_dict(google_cloud_channel_v1_renewal_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


