# GoogleCloudChannelV1alpha1RenewalSettings

Renewal settings for renewable Offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_commitment** | **bool** | If true, disables commitment-based offer on renewal and switches to flexible or pay as you go. Deprecated: Use &#x60;payment_plan&#x60; instead. | [optional] 
**enable_renewal** | **bool** | If false, the plan will be completed at the end date. | [optional] 
**payment_cycle** | [**GoogleCloudChannelV1alpha1Period**](GoogleCloudChannelV1alpha1Period.md) |  | [optional] 
**payment_option** | **str** | Set if enable_renewal&#x3D;true. Deprecated: Use &#x60;payment_cycle&#x60; instead. | [optional] 
**payment_plan** | **str** | Describes how a reseller will be billed. | [optional] 
**resize_unit_count** | **bool** | If true and enable_renewal &#x3D; true, the unit (for example seats or licenses) will be set to the number of active units at renewal time. | [optional] 
**scheduled_renewal_offer** | **str** | Output only. The offer resource name that the entitlement will renew on at the end date. Takes the form: accounts/{account_id}/offers/{offer_id}. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_renewal_settings import GoogleCloudChannelV1alpha1RenewalSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1RenewalSettings from a JSON string
google_cloud_channel_v1alpha1_renewal_settings_instance = GoogleCloudChannelV1alpha1RenewalSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1RenewalSettings.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_renewal_settings_dict = google_cloud_channel_v1alpha1_renewal_settings_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1RenewalSettings from a dict
google_cloud_channel_v1alpha1_renewal_settings_from_dict = GoogleCloudChannelV1alpha1RenewalSettings.from_dict(google_cloud_channel_v1alpha1_renewal_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


