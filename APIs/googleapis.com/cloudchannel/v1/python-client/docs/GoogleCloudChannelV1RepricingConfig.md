# GoogleCloudChannelV1RepricingConfig

Configuration for repricing a Google bill over a period of time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment** | [**GoogleCloudChannelV1RepricingAdjustment**](GoogleCloudChannelV1RepricingAdjustment.md) |  | [optional] 
**channel_partner_granularity** | **object** | Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object. Deprecated: This is no longer supported. Use RepricingConfig.EntitlementGranularity instead. | [optional] 
**conditional_overrides** | [**List[GoogleCloudChannelV1ConditionalOverride]**](GoogleCloudChannelV1ConditionalOverride.md) | The conditional overrides to apply for this configuration. If you list multiple overrides, only the first valid override is used. If you don&#39;t list any overrides, the API uses the normal adjustment and rebilling basis. | [optional] 
**effective_invoice_month** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**entitlement_granularity** | [**GoogleCloudChannelV1RepricingConfigEntitlementGranularity**](GoogleCloudChannelV1RepricingConfigEntitlementGranularity.md) |  | [optional] 
**rebilling_basis** | **str** | Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_repricing_config import GoogleCloudChannelV1RepricingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RepricingConfig from a JSON string
google_cloud_channel_v1_repricing_config_instance = GoogleCloudChannelV1RepricingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RepricingConfig.to_json())

# convert the object into a dict
google_cloud_channel_v1_repricing_config_dict = google_cloud_channel_v1_repricing_config_instance.to_dict()
# create an instance of GoogleCloudChannelV1RepricingConfig from a dict
google_cloud_channel_v1_repricing_config_from_dict = GoogleCloudChannelV1RepricingConfig.from_dict(google_cloud_channel_v1_repricing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


