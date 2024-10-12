# Advertiser

A single advertiser in Display & Video 360 (DV360).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_server_config** | [**AdvertiserAdServerConfig**](AdvertiserAdServerConfig.md) |  | [optional] 
**advertiser_id** | **str** | Output only. The unique ID of the advertiser. Assigned by the system. | [optional] [readonly] 
**billing_config** | [**AdvertiserBillingConfig**](AdvertiserBillingConfig.md) |  | [optional] 
**creative_config** | [**AdvertiserCreativeConfig**](AdvertiserCreativeConfig.md) |  | [optional] 
**data_access_config** | [**AdvertiserDataAccessConfig**](AdvertiserDataAccessConfig.md) |  | [optional] 
**display_name** | **str** | Required. The display name of the advertiser. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**entity_status** | **str** | Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are &#x60;ENTITY_STATUS_ACTIVE&#x60;, &#x60;ENTITY_STATUS_PAUSED&#x60; and &#x60;ENTITY_STATUS_SCHEDULED_FOR_DELETION&#x60;. * If set to &#x60;ENTITY_STATUS_SCHEDULED_FOR_DELETION&#x60;, the advertiser will be deleted 30 days from when it was first scheduled for deletion. | [optional] 
**general_config** | [**AdvertiserGeneralConfig**](AdvertiserGeneralConfig.md) |  | [optional] 
**integration_details** | [**IntegrationDetails**](IntegrationDetails.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the advertiser. | [optional] [readonly] 
**partner_id** | **str** | Required. Immutable. The unique ID of the partner that the advertiser belongs to. | [optional] 
**prisma_enabled** | **bool** | Whether integration with Mediaocean (Prisma) is enabled. By enabling this, you agree to the following: On behalf of my company, I authorize Mediaocean (Prisma) to send budget segment plans to Google, and I authorize Google to send corresponding reporting and invoices from DV360 to Mediaocean for the purposes of budget planning, billing, and reconciliation for this advertiser. | [optional] 
**serving_config** | [**AdvertiserTargetingConfig**](AdvertiserTargetingConfig.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp when the advertiser was last updated. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advertiser import Advertiser

# TODO update the JSON string below
json = "{}"
# create an instance of Advertiser from a JSON string
advertiser_instance = Advertiser.from_json(json)
# print the JSON string representation of the object
print(Advertiser.to_json())

# convert the object into a dict
advertiser_dict = advertiser_instance.to_dict()
# create an instance of Advertiser from a dict
advertiser_from_dict = Advertiser.from_dict(advertiser_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


