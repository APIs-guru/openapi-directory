# GoogleCloudChannelV1RepricingConfigEntitlementGranularity

Applies the repricing configuration at the entitlement level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement** | **str** | Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_repricing_config_entitlement_granularity import GoogleCloudChannelV1RepricingConfigEntitlementGranularity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RepricingConfigEntitlementGranularity from a JSON string
google_cloud_channel_v1_repricing_config_entitlement_granularity_instance = GoogleCloudChannelV1RepricingConfigEntitlementGranularity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RepricingConfigEntitlementGranularity.to_json())

# convert the object into a dict
google_cloud_channel_v1_repricing_config_entitlement_granularity_dict = google_cloud_channel_v1_repricing_config_entitlement_granularity_instance.to_dict()
# create an instance of GoogleCloudChannelV1RepricingConfigEntitlementGranularity from a dict
google_cloud_channel_v1_repricing_config_entitlement_granularity_from_dict = GoogleCloudChannelV1RepricingConfigEntitlementGranularity.from_dict(google_cloud_channel_v1_repricing_config_entitlement_granularity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


