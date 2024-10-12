# GoogleAdsSearchads360V0ResourcesCustomer

A customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_status** | **str** | Output only. Account status, for example, Enabled, Paused, Removed, etc. | [optional] [readonly] 
**account_type** | **str** | Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc. | [optional] [readonly] 
**auto_tagging_enabled** | **bool** | Whether auto-tagging is enabled for the customer. | [optional] 
**conversion_tracking_setting** | [**GoogleAdsSearchads360V0ResourcesConversionTrackingSetting**](GoogleAdsSearchads360V0ResourcesConversionTrackingSetting.md) |  | [optional] 
**creation_time** | **str** | Output only. The timestamp when this customer was created. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. | [optional] [readonly] 
**currency_code** | **str** | Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported. | [optional] 
**descriptive_name** | **str** | Optional, non-unique descriptive name of the customer. | [optional] 
**double_click_campaign_manager_setting** | [**GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting**](GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting.md) |  | [optional] 
**engine_id** | **str** | Output only. ID of the account in the external engine account. | [optional] [readonly] 
**final_url_suffix** | **str** | The URL template for appending params to the final URL. | [optional] 
**id** | **str** | Output only. The ID of the customer. | [optional] [readonly] 
**last_modified_time** | **str** | Output only. The datetime when this customer was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**manager** | **bool** | Output only. Whether the customer is a manager. | [optional] [readonly] 
**resource_name** | **str** | Immutable. The resource name of the customer. Customer resource names have the form: &#x60;customers/{customer_id}&#x60; | [optional] 
**status** | **str** | Output only. The status of the customer. | [optional] [readonly] 
**time_zone** | **str** | Immutable. The local timezone ID of the customer. | [optional] 
**tracking_url_template** | **str** | The URL template for constructing a tracking URL out of parameters. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_customer import GoogleAdsSearchads360V0ResourcesCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCustomer from a JSON string
google_ads_searchads360_v0_resources_customer_instance = GoogleAdsSearchads360V0ResourcesCustomer.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCustomer.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_customer_dict = google_ads_searchads360_v0_resources_customer_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCustomer from a dict
google_ads_searchads360_v0_resources_customer_from_dict = GoogleAdsSearchads360V0ResourcesCustomer.from_dict(google_ads_searchads360_v0_resources_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


